import { useEffect, useState } from 'react';
import eventBus from '../EventBus';

const NotificationBar = () => {
    
    const [show, setShow] = useState<boolean>(false);
    const [message, setMessage] = useState<string>('');

    useEffect(() => {
        eventBus.on("notify", (data) => {
            setMessage(data.message);
            setShow(true);
            setTimeout(() => {
                setShow(false);
            }, 3500)
        });
        return () => {
            eventBus.remove("notify", (e) => { console.log(e)});
        }
    }, []);

    return (
        <>
            {
                show ? (
                    <div className="notification">
                        <span className="message">{message}</span>
                    </div>
                ) : null
            }
        </>
    )
}

export default NotificationBar;