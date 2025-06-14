import { useState, useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import axios from "axios";
import * as Icon from "../icons/iconsStorage.jsx";
export default function SingleUserProfile() {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setError("ID пользователя не указан");
            setLoading(false);
            return;
        }

        const fetchUser = async () => {
            try {
                const response = await axios.get(`/users/${id}`);
                setUser(response.data);
            } catch (err) {
                console.error("Ошибка загрузки пользователя:", err);
                setError("Не удалось загрузить данные пользователя");
            } finally {
                setLoading(false);
            }
        };

        fetchUser();
    }, [id]);

    if (loading) {
        return <div className="text-center py-8">Загрузка...</div>;
    }

    if (error) {
        return <div className="text-center py-8 text-red-500">{error}</div>;
    }

    if (!user) {
        return <div className="text-center py-8">Пользователь не найден</div>;
    }
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center max-w-2xl mx-auto p-4">
                {/* Аватар */}
                <div className="w-48 h-48 mx-auto">
                    {user.avatar === null ? (
                        <img
                            src={`http://82.202.129.86:80/static/default_avatar.jpg`}
                            alt="Аватар"
                            className="w-full h-full rounded-full object-cover"
                        />
                    ) : (
                        <img
                            src={`http://82.202.129.86:80${user.avatar}`}
                            alt="Аватар"
                            className="w-full h-full rounded-full object-cover"
                        />
                    )}
                </div>

                {/* Основная информация */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">
                        {user.firstName} {user.lastName}
                    </h1>

                    {/* Рейтинг хозяина */}
                    {user.hostRating ? (
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="flex items-center bg-indigo-100 px-4 py-2 rounded-full">
                                <Icon.StarIcon className="w-5 h-5 text-yellow-500" />
                                <span className="ml-1 font-medium">
                                    Рейтинг хозяина:{" "}
                                    {user.hostRating.toFixed(1)}
                                </span>
                            </div>
                        </div>
                    ) : (
                        <div className="text-gray-500 mb-4">
                            {user.properties.length > 0
                                ? "Гости еще не оставляли отзывов об этом хозяине"
                                : "У этого хозяина пока нет объявлений"}
                        </div>
                    )}
                </div>

                {/* Детальная информация */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8 text-left">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Icon.CheckInIcon />
                            <span className="text-gray-700">
                                {user.firstName} {user.lastName}
                            </span>
                        </div>

                        {user.createdAt && (
                            <div className="flex items-center gap-3">
                                <Icon.Confirmed />
                                <span className="text-gray-700">
                                    С нами с{" "}
                                    {new Date(
                                        user.createdAt
                                    ).toLocaleDateString()}
                                </span>
                            </div>
                        )}
                    </div>
                </div>

                {/* Статистика */}
                {user.properties.length > 0 && (
                    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                        <h2 className="text-xl font-semibold mb-4 border-b pb-2">
                            Статистика
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <div className="text-indigo-600 font-bold text-2xl">
                                    {user.properties.length}
                                </div>
                                <div className="text-gray-600">
                                    {user.properties.length === 1
                                        ? "Объявление"
                                        : "Объявлений"}
                                </div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-lg">
                                <div className="text-green-600 font-bold text-2xl">
                                    {user.bookings.length || 0}
                                </div>
                                <div className="text-gray-600">
                                    {user.bookings.length === 1
                                        ? "Бронирование"
                                        : "Бронирований"}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
