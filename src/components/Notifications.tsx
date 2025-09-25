// src/components/Notifications.tsx
import React from 'react';
import { Bell } from 'lucide-react';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  const notificationData = [
    {
      icon: '❤️',
      text: (
        <>
          <span className="font-semibold">Michael Rodriguez</span> liked your idea 'AI-Powered Personal Finance Assistant'
        </>
      ),
      time: '2 minutes ago',
      isUnread: true,
    },
    {
      icon: '💬',
      text: (
        <>
          <span className="font-semibold">Jennifer Park</span> commented on your idea 'Sustainable Urban Farming Network'
        </>
      ),
      time: '1 hour ago',
      isUnread: true,
    },
    {
      icon: '👥',
      text: (
        <>
          <span className="font-semibold">David Thompson</span> started following you
        </>
      ),
      time: '3 hours ago',
      isUnread: false,
    },
    {
      icon: '🏆',
      text: 'You earned the Innovation Leader badge!',
      time: '1 day ago',
      isUnread: false,
    },
    {
      icon: '🔥',
      text: "Your idea 'Virtual Reality Therapy Sessions' is now trending!",
      time: '2 days ago',
      isUnread: false,
    },
  ];

  return (
    <div className="bg-[#242424] p-8 rounded-lg border border-gray-700">
      <div className="flex items-center gap-3 mb-4">
        <Bell className="text-gray-400" />
        <h3 className="text-lg font-semibold text-white">Notifications</h3>
      </div>
      <div>
        {notificationData.map((item, index) => (
          <NotificationItem
            key={index}
            icon={item.icon}
            text={item.text}
            time={item.time}
            isUnread={item.isUnread}
          />
        ))}
      </div>
    </div>
  );
};

export default Notifications;