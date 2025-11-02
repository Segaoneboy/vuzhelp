import {NotificationProps} from "@/types/notifications";

export default function NotificationComponent({directionNumber, text}: NotificationProps) {
    return(
        <>
            <div className="flex gap-1 m-1">
                <p className="text-[#2C3E50] font-bold">{directionNumber}:</p>
                <p className="text-[#3498DB] font-bold text-left">{text}</p>
            </div>
            <hr className="border-[#A0A8B1] boder-t-2"  />
        </>
    )
}