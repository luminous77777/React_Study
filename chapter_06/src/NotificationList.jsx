import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        no: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다"
    },    
    {
        no: 2,
        message: "점식식사 시간입니다"
    },
    {
        no: 3,
        message: "이제 곧 미팅이 시작됩니다"
    }
];

let timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notifications: []
        };
    }

    componentDidMount = () => {
        const {notifications} = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({
                    notifications: notifications
                });
            }else {
                this.setState({notifications:[]});
                clearInterval(timer);
            }
        }, 1000);
        console.log("componentDidMount() called...........")
    }

    componentDidUpdate() {
        console.log("componentDidUpdate() called...........");
    }

    componentWillUnmount = () => {
        if (timer) {
            clearInterval(timer);
        }
        console.log("componentWillUnmount() called...........");
    }

    render() {
        return (
            <div>
                {this.state.notifications.map(notification => {
                    return <Notification
                        key={notification.no}
                        message={notification.message} />;
                })}
            </div>
        )
    }
}

export default NotificationList;