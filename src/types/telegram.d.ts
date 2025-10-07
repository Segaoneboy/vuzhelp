export type TelegramUser = {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
    photo_url?: string;
}
export type TelegramContextType = {
    tg: any;
    user: any;
    themeParams: any;
    colorScheme: string;
};