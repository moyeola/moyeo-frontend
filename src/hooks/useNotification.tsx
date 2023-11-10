import { atom, useRecoilState } from "recoil";
import { RequestNotificationPermissionModal } from "../containers/modals/RequestNotificationPermissionModal/RequestNotificationPermissionModal";
import { useModal } from "../libs/ui";
import { useCallback, useState } from "react";
import { FIREBASE_CONFIG } from "../config/fcmConfig";
import { initializeApp } from "firebase/app";
import { getToken, getMessaging } from "firebase/messaging";
import { useMutation } from "react-query";
import { client } from "../libs/api";

// const isNotificationSupported = "Notification" in window;
// const isNotificationPermissionGranted = Notification.permission === "granted";

const isRequestNotificationModalOpenState = atom({
    key: "isRequestNotificationModalOpen",
    default: false,
});

export function useNotification() {
    const [isRequestLoading, setIsRequestLoading] = useState(false);

    const modal = useModal();
    const [
        isRequestNotificationModalOpenValue,
        setIsRequestNotificationModalOpenValue,
    ] = useRecoilState(isRequestNotificationModalOpenState);

    const { mutate } = useMutation(client.users.me.notifications.register, {
        onSuccess: () => {
            console.log("success");
        },
        onError: (err) => {
            console.error(err);
        },
    });

    const openRequestModal = useCallback(() => {
        setIsRequestNotificationModalOpenValue(true);
        if (
            localStorage.getItem("isNotificationPermissionRequested") !==
                "true" &&
            !isRequestNotificationModalOpenValue
        ) {
            modal.open(<RequestNotificationPermissionModal />);
        }
    }, [
        isRequestNotificationModalOpenValue,
        modal,
        setIsRequestNotificationModalOpenValue,
    ]);

    const registerToken = async () => {
        const firebase = initializeApp(FIREBASE_CONFIG);
        const messaging = getMessaging(firebase);
        const token = await getToken(messaging, {
            vapidKey: import.meta.env.VITE_VAPID_PUBLIC_KEY,
        });
        mutate({
            token,
        });
    };

    const requestPermission = async () => {
        setIsRequestLoading(true);
        const permission = await Notification.requestPermission();
        localStorage.setItem("isNotificationPermissionRequested", "true");
        if (permission === "granted") {
            await registerToken();
        } else {
            console.log("denied", permission);
        }

        setIsRequestLoading(false);
        modal.close();
    };

    return {
        openRequestModal,
        requestPermission,
        registerToken,
        isRequestLoading,
    };
}
