export default interface IAlert{
    type: string,
    message: string,
    onClose?: () => void,
    show: boolean,
}