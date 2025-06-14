import { Link } from "react-router-dom";
import * as Icon from "../icons/iconsStorage";
import {
    FaInstagram,
    FaTwitter,
    FaFacebookF,
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import Modal from "react-modal";

export default function Footer() {
    const [modalContent, setModalContent] = useState(null);

    const openModal = (content) => {
        setModalContent(content);
    };

    const closeModal = () => {
        setModalContent(null);
    };

    const aboutContent = (
        <div className="p-6 max-w-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">О компании RoamStay</h2>
                <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                >
                    <FaTimes />
                </button>
            </div>
            <p className="mb-4">
                RoamStay - это платформа для поиска уникального жилья по всей
                России. Мы помогаем путешественникам находить уютные места для
                отдыха.
            </p>
            <p>
                Наша миссия - сделать ваш отдых незабываемым, предоставляя
                доступ к лучшим вариантам размещения.
            </p>
        </div>
    );

    const contactsContent = (
        <div className="p-6 max-w-md">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Наши контакты</h2>
                <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                >
                    <FaTimes />
                </button>
            </div>
            <div className="space-y-4">
                <div className="flex items-start">
                    <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                    <span>г. Москва, ул. Примерная, 123</span>
                </div>
                <div className="flex items-center">
                    <FaPhone className="mr-3" />
                    <span>+7 (123) 456-78-90</span>
                </div>
                <div className="flex items-center">
                    <FaEnvelope className="mr-3" />
                    <span>hello@roamstay.com</span>
                </div>
            </div>
            <div className="mt-6">
                <h3 className="font-semibold mb-2">Режим работы:</h3>
                <p>Пн-Пт: 9:00 - 18:00</p>
                <p>Сб-Вс: 10:00 - 16:00</p>
            </div>
        </div>
    );

    // Стили для модального окна
    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            border: "none",
            borderRadius: "12px",
            padding: "0",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
            width: "fit",
        },
        overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1000,
        },
    };

    return (
        <footer className="bg-gray-800 text-white pt-12 pb-6 mt-16 rounded-2xl">
            <div className="max-w-7xl mx-auto px-4">
                {/* Основные разделы */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* О компании */}
                    <div>
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                            <Icon.MainLogo
                                className="text-rose-500 mr-2"
                                size={24}
                            />
                            RoamStay
                        </h3>
                        <p className="text-gray-400">
                            Открывайте для себя уникальные места для проживания
                            по всей россии вместе с RoamStay.
                        </p>
                    </div>

                    {/* Навигация */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">
                            Навигация
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    Главная
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-400 hover:text-white transition"
                                >
                                    Жилье
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => openModal(aboutContent)}
                                    className="text-gray-400 hover:text-white transition text-left w-full"
                                >
                                    О нас
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => openModal(contactsContent)}
                                    className="text-gray-400 hover:text-white transition text-left w-full"
                                >
                                    Контакты
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Соцсети */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4">
                            Мы в соцсетях
                        </h4>
                        <div className="flex space-x-4">
                            <a
                                href="https://www.instagram.com/"
                                className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition"
                            >
                                <FaInstagram />
                            </a>
                            <a
                                href="https://x.com/"
                                className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition"
                            >
                                <FaTwitter />
                            </a>
                            <a
                                href="https://www.facebook.com/"
                                className="bg-gray-800 hover:bg-gray-700 w-10 h-10 rounded-full flex items-center justify-center transition"
                            >
                                <FaFacebookF />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Копирайт */}
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © {new Date().getFullYear()} RoamStay. Все права
                        защищены.
                    </p>
                </div>
            </div>

            <Modal
                isOpen={!!modalContent}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Информационное окно"
            >
                {modalContent}
            </Modal>
        </footer>
    );
}
