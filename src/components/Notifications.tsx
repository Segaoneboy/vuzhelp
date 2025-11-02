import NotificationComponent from "@/components/ui/NotificationComponent";

export default function Notifications(){
    return(
        <>
            <div className="flex flex-col gap-2">
                <h1 className="text-[#2C3E50] font-bold ">Уведомления: </h1>
                <NotificationComponent directionNumber="23.06.2025" text="НГТУ принял ваши документы" />
                <NotificationComponent directionNumber="25.06.2025" text="У вас отличные шансы поступить на бюджет в МФТИ по 1 приоритету!" />
                <NotificationComponent directionNumber="01.06.2025" text="К сожалению вы не проходите на бюджет по первому приоритету в ИТМО" />
            </div>
        </>
    )
}