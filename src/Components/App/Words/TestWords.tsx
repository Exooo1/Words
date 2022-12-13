import React, {ChangeEvent, useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../Redux/ReduxUtils";
import {profileReselect} from "../../../Redux/Reselect";
import {fetchAddedWords, fetchDeleteWord, fetchGetWords, fetchWordFind} from "../../../Redux/WordsReducer";
import {SortChoice, WordType} from "../../../API/wordAPI";
import {WordModal} from "../../../Common/Modal/WordModal/WordModal";
import {SortElement} from "./SortElements/SortElement";
import {Word} from "./Word/Word";
import {Pagination} from "./Pagination/Pagination";

const returnWords=()=>{
    const words:any =[
            {
                "word": "Art",
                "translate": "Искусство",
                "description": "",
                "added": "Tue Oct 25 2022 22:41:43",
                "_id": "63583bf7729681a89c771dc5"
            },
            {
                "word": "Air",
                "translate": "Воздух",
                "description": "",
                "added": "Tue Oct 25 2022 22:41:56",
                "_id": "63583c05729681a89c771dcb"
            },
            {
                "word": "Ask",
                "translate": "Спрашивать, просить",
                "description": "",
                "added": "Tue Oct 25 2022 22:42:19",
                "_id": "63583c1b729681a89c771dd3"
            },
            {
                "word": "Add",
                "translate": "Добавлять, сложить",
                "description": "",
                "added": "Tue Oct 25 2022 22:42:42",
                "_id": "63583c32729681a89c771ddd"
            },
            {
                "word": "Alphabet",
                "translate": "Алфавит",
                "description": "",
                "added": "Tue Oct 25 2022 22:43:03",
                "_id": "63583c47729681a89c771de9"
            },
            {
                "word": "Armchair",
                "translate": "Кресло",
                "description": "",
                "added": "Tue Oct 25 2022 22:43:20",
                "_id": "63583c58729681a89c771df7"
            },
            {
                "word": "Again",
                "translate": "Снова, опять",
                "description": "",
                "added": "Tue Oct 25 2022 22:43:28",
                "_id": "63583c60729681a89c771e07"
            },
            {
                "word": "Activity",
                "translate": "Активность, деятельность",
                "description": "",
                "added": "Tue Oct 25 2022 22:44:27",
                "_id": "63583c9b729681a89c771e22"
            },
            {
                "word": "Among",
                "translate": "Среди",
                "description": "",
                "added": "Tue Oct 25 2022 22:44:38",
                "_id": "63583ca6729681a89c771e36"
            },
            {
                "word": "Actor",
                "translate": "Актёр",
                "description": "",
                "added": "Tue Oct 25 2022 22:44:53",
                "_id": "63583cb5729681a89c771e4c"
            },
            {
                "word": "Absorb",
                "translate": "Поглощать, впитывать",
                "description": "",
                "added": "Tue Oct 25 2022 22:45:19",
                "_id": "63583ccf729681a89c771e64"
            },
            {
                "word": "Absurd",
                "translate": "Абсурд",
                "description": "",
                "added": "Tue Oct 25 2022 22:45:30",
                "_id": "63583cda729681a89c771e7e"
            },
            {
                "word": "Ability",
                "translate": "Способность",
                "description": "",
                "added": "Tue Oct 25 2022 22:46:03",
                "_id": "63583cfb729681a89c771e9a"
            },
            {
                "word": "Absent",
                "translate": "Отсутствовать",
                "description": "",
                "added": "Tue Oct 25 2022 22:48:14",
                "_id": "63583d7f729681a89c771eb8"
            },
            {
                "word": "Area",
                "translate": "Область",
                "description": "",
                "added": "Tue Oct 25 2022 22:49:40",
                "_id": "63583dd4729681a89c771ed8"
            },
            {
                "word": "Aunt",
                "translate": "Тётя",
                "description": "",
                "added": "Tue Oct 25 2022 22:49:59",
                "_id": "63583de7729681a89c771efa"
            },
            {
                "word": "Afraid of",
                "translate": "Бояться, испуганный",
                "description": "Это когда мы имеем какую-то фобию, страхи...",
                "added": "Tue Oct 25 2022 22:51:59",
                "_id": "63583e5f729681a89c771f40"
            },
            {
                "word": "Abuse",
                "translate": "Злоупотребление",
                "description": "",
                "added": "Tue Oct 25 2022 22:52:54",
                "_id": "63583e96729681a89c771f66"
            },
            {
                "word": "Accent",
                "translate": "Акцент, ударение",
                "description": "",
                "added": "Tue Oct 25 2022 22:53:13",
                "_id": "63583ea9729681a89c771f8e"
            },
            {
                "word": "Accept",
                "translate": "Принимать",
                "description": "",
                "added": "Tue Oct 25 2022 22:53:37",
                "_id": "63583ec2729681a89c771fb8"
            },
            {
                "word": "Access",
                "translate": "Доступ, доступность",
                "description": "",
                "added": "Tue Oct 25 2022 22:54:41",
                "_id": "63583f02729681a89c7720f5"
            },
            {
                "word": "Act",
                "translate": "Поступок",
                "description": "",
                "added": "Tue Oct 25 2022 22:55:36",
                "_id": "63583f39729681a89c772123"
            },
            {
                "word": "After",
                "translate": "После, спустя",
                "description": "",
                "added": "Tue Oct 25 2022 22:58:49",
                "_id": "63583ff9729681a89c772239"
            },
            {
                "word": "Action",
                "translate": "Действие",
                "description": "",
                "added": "Tue Oct 25 2022 22:59:04",
                "_id": "63584008729681a89c77226b"
            },
            {
                "word": "Actual",
                "translate": "Реальный, фактический",
                "description": "",
                "added": "Tue Oct 25 2022 22:59:35",
                "_id": "63584028729681a89c77229f"
            },
            {
                "word": "Addition",
                "translate": "Добавление, дополнение",
                "description": "",
                "added": "Tue Oct 25 2022 23:02:17",
                "_id": "635840c9729681a89c7723f4"
            },
            {
                "word": "Address",
                "translate": "Адрес, обращение",
                "description": "",
                "added": "Tue Oct 25 2022 23:03:22",
                "_id": "6358410a729681a89c77242c"
            },
            {
                "word": "Admire",
                "translate": "Любоваться, восхищаться",
                "description": "",
                "added": "Tue Oct 25 2022 23:03:59",
                "_id": "6358412f729681a89c77249e"
            },
            {
                "word": "Adopt",
                "translate": "Перенимать, усыновлять, принять",
                "description": "",
                "added": "Tue Oct 25 2022 23:04:42",
                "_id": "6358415a729681a89c7724da"
            },
            {
                "word": "Anymore",
                "translate": "Больше не, уже не",
                "description": "",
                "added": "Tue Oct 25 2022 23:05:11",
                "_id": "63584177729681a89c772662"
            },
            {
                "word": "Almost",
                "translate": "Почти, едва",
                "description": "",
                "added": "Tue Oct 25 2022 23:05:25",
                "_id": "63584185729681a89c7726a2"
            },
            {
                "word": "Anyway",
                "translate": "В любом случае, так или иначе",
                "description": "",
                "added": "Tue Oct 25 2022 23:05:50",
                "_id": "6358419e729681a89c7726e4"
            },
            {
                "word": "Able",
                "translate": "Быть в состоянии, мочь, способный",
                "description": "",
                "added": "Tue Oct 25 2022 23:07:51",
                "_id": "63584217729681a89c772b06"
            },
            {
                "word": "About",
                "translate": "О, об, как насчёт",
                "description": "",
                "added": "Tue Oct 25 2022 23:08:48",
                "_id": "63584250729681a89c772b4c"
            },
            {
                "word": "Acceptable",
                "translate": "Приемлемый, приемлемость",
                "description": "",
                "added": "Tue Oct 25 2022 23:10:11",
                "_id": "635842a3729681a89c772b94"
            },
            {
                "word": "Achieve",
                "translate": "Достигать",
                "description": "",
                "added": "Tue Oct 25 2022 23:11:37",
                "_id": "635842f9729681a89c772bde"
            },
            {
                "word": "Achievement",
                "translate": "Достижения, успех",
                "description": "",
                "added": "Tue Oct 25 2022 23:11:53",
                "_id": "63584309729681a89c772c2a"
            },
            {
                "word": "Acquire",
                "translate": "Приобретать, усваивать",
                "description": "",
                "added": "Tue Oct 25 2022 23:12:21",
                "_id": "63584326729681a89c772c78"
            },
            {
                "word": "Adventure",
                "translate": "Приключение, искатель приключений",
                "description": "",
                "added": "Tue Oct 25 2022 23:13:43",
                "_id": "63584377729681a89c772cc8"
            },
            {
                "word": "Advice",
                "translate": "Совет",
                "description": "",
                "added": "Tue Oct 25 2022 23:14:39",
                "_id": "635843af729681a89c772d1a"
            },
            {
                "word": "Advise",
                "translate": "Советовать, извещать",
                "description": "",
                "added": "Tue Oct 25 2022 23:16:02",
                "_id": "63584403729681a89c772d6e"
            },
            {
                "word": "Affect",
                "translate": "Влиять, затрагивать",
                "description": "",
                "added": "Tue Oct 25 2022 23:16:35",
                "_id": "63584423729681a89c772dc4"
            },
            {
                "word": "Against",
                "translate": "Против",
                "description": "",
                "added": "Tue Oct 25 2022 23:18:12",
                "_id": "63584484729681a89c77304b"
            },
            {
                "word": "Age",
                "translate": "Возраст, лет",
                "description": "",
                "added": "Tue Oct 25 2022 23:18:42",
                "_id": "635844a3729681a89c7730a5"
            },
            {
                "word": "Agent",
                "translate": "Агент",
                "description": "",
                "added": "Tue Oct 25 2022 23:18:59",
                "_id": "635844b3729681a89c773101"
            },
            {
                "word": "Aggressive",
                "translate": "Агрессивный",
                "description": "",
                "added": "Tue Oct 25 2022 23:19:14",
                "_id": "635844c2729681a89c77315f"
            },
            {
                "word": "Ago",
                "translate": "Назад, давно",
                "description": "",
                "added": "Tue Oct 25 2022 23:19:47",
                "_id": "635844e3729681a89c7731bf"
            },
            {
                "word": "Agree",
                "translate": "Соглашаться, договариваться",
                "description": "",
                "added": "Tue Oct 25 2022 23:20:29",
                "_id": "6358450e729681a89c773674"
            },
            {
                "word": "Ahead",
                "translate": "Впереди, вперед",
                "description": "",
                "added": "Tue Oct 25 2022 23:20:46",
                "_id": "6358451e729681a89c7736d8"
            },
            {
                "word": "Airport",
                "translate": "Аэропорт",
                "description": "",
                "added": "Tue Oct 25 2022 23:27:41",
                "_id": "635846bd729681a89c773c20"
            },
            {
                "word": "Alcohol",
                "translate": "Алкоголь",
                "description": "",
                "added": "Tue Oct 25 2022 23:28:05",
                "_id": "635846d5729681a89c773c88"
            },
            {
                "word": "Alive",
                "translate": "Живой, в живых",
                "description": "",
                "added": "Tue Oct 25 2022 23:28:23",
                "_id": "635846e7729681a89c773cf2"
            },
            {
                "word": "Allow",
                "translate": "Разрешать, позволять",
                "description": "",
                "added": "Tue Oct 25 2022 23:29:15",
                "_id": "6358471b729681a89c773d5e"
            },
            {
                "word": "Ally",
                "translate": "Союзник",
                "description": "",
                "added": "Tue Oct 25 2022 23:29:46",
                "_id": "6358473a729681a89c773dcc"
            },
            {
                "word": "Aloud",
                "translate": "Вслух",
                "description": "",
                "added": "Tue Oct 25 2022 23:30:27",
                "_id": "63584763729681a89c773e3c"
            },
            {
                "word": "Already",
                "translate": "Уже",
                "description": "",
                "added": "Tue Oct 25 2022 23:30:46",
                "_id": "63584776729681a89c773eae"
            },
            {
                "word": "Also",
                "translate": "Также, тоже",
                "description": "",
                "added": "Tue Oct 25 2022 23:30:56",
                "_id": "63584780729681a89c773f22"
            },
            {
                "word": "Alternative",
                "translate": "Альтернатива",
                "description": "",
                "added": "Tue Oct 25 2022 23:31:47",
                "_id": "635847b3729681a89c773f98"
            },
            {
                "word": "Always",
                "translate": "Всегда, вечно",
                "description": "",
                "added": "Tue Oct 25 2022 23:32:07",
                "_id": "635847c7729681a89c774010"
            },
            {
                "word": "Ancient",
                "translate": "Древний, старинный",
                "description": "",
                "added": "Tue Oct 25 2022 23:33:24",
                "_id": "63584814729681a89c77408a"
            },
            {
                "word": "And",
                "translate": "И, а",
                "description": "",
                "added": "Tue Oct 25 2022 23:33:40",
                "_id": "63584824729681a89c774106"
            },
            {
                "word": "Animal",
                "translate": "Животное",
                "description": "",
                "added": "Tue Oct 25 2022 23:35:05",
                "_id": "63584879729681a89c77442e"
            },
            {
                "word": "Annoy",
                "translate": "Раздражать",
                "description": "",
                "added": "Tue Oct 25 2022 23:35:55",
                "_id": "635848ab729681a89c7744ae"
            },
            {
                "word": "Another",
                "translate": "Другой, ещё один",
                "description": "",
                "added": "Tue Oct 25 2022 23:36:13",
                "_id": "635848bd729681a89c774530"
            },
            {
                "word": "Answer",
                "translate": "Ответ, отвечать",
                "description": "",
                "added": "Tue Oct 25 2022 23:36:58",
                "_id": "635848ea729681a89c7745b4"
            },
            {
                "word": "Apple",
                "translate": "Яблоко",
                "description": "",
                "added": "Tue Oct 25 2022 23:37:38",
                "_id": "63584912729681a89c77463a"
            },
            {
                "word": "Arm",
                "translate": "Рука",
                "description": "Вся рука",
                "added": "Tue Oct 25 2022 23:38:19",
                "_id": "6358493b729681a89c7746c2"
            },
            {
                "word": "Author",
                "translate": "Автор",
                "description": "",
                "added": "Wed Oct 26 2022 13:49:19",
                "_id": "635910af72e23dc8fc035312"
            },
            {
                "word": "Avoid",
                "translate": "Избегать, уклоняться",
                "description": "",
                "added": "Wed Oct 26 2022 13:50:13",
                "_id": "635910e572e23dc8fc03539e"
            },
            {
                "word": "Available",
                "translate": "Доступный, доступность",
                "description": "",
                "added": "Wed Oct 26 2022 13:50:53",
                "_id": "6359110d72e23dc8fc03542c"
            },
            {
                "word": "Appreciate",
                "translate": "Ценить, оценить",
                "description": "",
                "added": "Wed Oct 26 2022 13:57:12",
                "_id": "6359128872e23dc8fc03764b"
            },
            {
                "word": "Approve",
                "translate": "Одобрить, утвердить",
                "description": "",
                "added": "Wed Oct 26 2022 13:59:57",
                "_id": "6359132d72e23dc8fc0379f5"
            },
            {
                "word": "Article",
                "translate": "Статья, материал",
                "description": "",
                "added": "Wed Oct 26 2022 14:00:22",
                "_id": "6359134672e23dc8fc037a8a"
            },
            {
                "word": "Attention",
                "translate": "Внимание, внимательность",
                "description": "",
                "added": "Wed Oct 26 2022 14:00:55",
                "_id": "6359136872e23dc8fc037b20"
            },
            {
                "word": "Awesome",
                "translate": "Потрясающе",
                "description": "",
                "added": "Wed Oct 26 2022 14:02:05",
                "_id": "635913ad72e23dc8fc037bb8"
            },
            {
                "word": "Announce",
                "translate": "Анонсировать, объявить",
                "description": "",
                "added": "Wed Oct 26 2022 14:03:18",
                "_id": "635913f672e23dc8fc037c52"
            },
            {
                "word": "Baby",
                "translate": "Младенец, малыш",
                "description": "",
                "added": "Wed Oct 26 2022 15:43:39",
                "_id": "63592b7b72e23dc8fc037ec1"
            },
            {
                "word": "Background",
                "translate": "Задний план, фон",
                "description": "",
                "added": "Wed Oct 26 2022 15:44:02",
                "_id": "63592b9272e23dc8fc037f5f"
            },
            {
                "word": "Bacteria",
                "translate": "Бактерия",
                "description": "",
                "added": "Wed Oct 26 2022 15:44:24",
                "_id": "63592ba972e23dc8fc037fff"
            },
            {
                "word": "Bad",
                "translate": "Плохо, плохой",
                "description": "",
                "added": "Wed Oct 26 2022 15:44:51",
                "_id": "63592bc372e23dc8fc0380f1"
            },
            {
                "word": "Bag",
                "translate": "Сумка, мешок",
                "description": "",
                "added": "Wed Oct 26 2022 15:45:13",
                "_id": "63592bd972e23dc8fc038195"
            },
            {
                "word": "Baggage",
                "translate": "Багаж, опыт",
                "description": "",
                "added": "Wed Oct 26 2022 15:45:43",
                "_id": "63592bf872e23dc8fc03823b"
            },
            {
                "word": "Bake",
                "translate": "Печь, испечь",
                "description": "",
                "added": "Wed Oct 26 2022 15:45:59",
                "_id": "63592c0772e23dc8fc0382e3"
            },
            {
                "word": "Balance",
                "translate": "Равновесие, баланс",
                "description": "",
                "added": "Wed Oct 26 2022 15:46:25",
                "_id": "63592c2172e23dc8fc03838d"
            },
            {
                "word": "Ball",
                "translate": "Мяч, шар",
                "description": "",
                "added": "Wed Oct 26 2022 15:46:39",
                "_id": "63592c2f72e23dc8fc038439"
            },
            {
                "word": "Ban",
                "translate": "Запрещать",
                "description": "",
                "added": "Wed Oct 26 2022 15:46:50",
                "_id": "63592c3a72e23dc8fc0384e7"
            },
            {
                "word": "Bank",
                "translate": "Банк",
                "description": "",
                "added": "Wed Oct 26 2022 15:47:04",
                "_id": "63592c4872e23dc8fc038597"
            },
            {
                "word": "Barrier",
                "translate": "Барьер, ограждение",
                "description": "",
                "added": "Wed Oct 26 2022 15:47:23",
                "_id": "63592c5c72e23dc8fc038649"
            },
            {
                "word": "Bathroom",
                "translate": "Ванная",
                "description": "",
                "added": "Wed Oct 26 2022 15:48:09",
                "_id": "63592c8972e23dc8fc038867"
            },
            {
                "word": "Battle",
                "translate": "Битва, борьба",
                "description": "",
                "added": "Wed Oct 26 2022 15:48:25",
                "_id": "63592c9972e23dc8fc03891d"
            },
            {
                "word": "Be",
                "translate": "Быть, бы",
                "description": "",
                "added": "Wed Oct 26 2022 15:48:41",
                "_id": "63592ca972e23dc8fc0389d5"
            },
            {
                "word": "Beach",
                "translate": "Пляж",
                "description": "",
                "added": "Wed Oct 26 2022 15:48:49",
                "_id": "63592cb172e23dc8fc038a8f"
            },
            {
                "word": "Beard",
                "translate": "Борода, бородатый",
                "description": "",
                "added": "Wed Oct 26 2022 15:49:05",
                "_id": "63592cc172e23dc8fc038b4b"
            },
            {
                "word": "Beautiful",
                "translate": "Красивый, прекрасный",
                "description": "",
                "added": "Wed Oct 26 2022 15:49:22",
                "_id": "63592cd272e23dc8fc038c09"
            },
            {
                "word": "Because",
                "translate": "Потому что",
                "description": "",
                "added": "Wed Oct 26 2022 15:51:38",
                "_id": "63592d5a72e23dc8fc038eac"
            },
            {
                "word": "Because of",
                "translate": "Из-за",
                "description": "",
                "added": "Wed Oct 26 2022 15:51:46",
                "_id": "63592d6272e23dc8fc038f6e"
            },
            {
                "word": "Become",
                "translate": "Становиться",
                "description": "",
                "added": "Wed Oct 26 2022 15:52:25",
                "_id": "63592d8a72e23dc8fc03951f"
            },
            {
                "word": "Bed",
                "translate": "Кровать",
                "description": "",
                "added": "Wed Oct 26 2022 15:52:37",
                "_id": "63592d9572e23dc8fc0395e5"
            },
            {
                "word": "Bedroom",
                "translate": "Спальня",
                "description": "",
                "added": "Wed Oct 26 2022 15:52:46",
                "_id": "63592d9e72e23dc8fc0396ad"
            },
            {
                "word": "Beef",
                "translate": "Говядина",
                "description": "",
                "added": "Wed Oct 26 2022 15:52:54",
                "_id": "63592da672e23dc8fc039777"
            },
            {
                "word": "Beer",
                "translate": "Пиво",
                "description": "",
                "added": "Wed Oct 26 2022 15:53:02",
                "_id": "63592dae72e23dc8fc039843"
            },
            {
                "word": "Before",
                "translate": "До, перед",
                "description": "",
                "added": "Wed Oct 26 2022 15:53:37",
                "_id": "63592dd272e23dc8fc039c41"
            },
            {
                "word": "Behaviour",
                "translate": "Поведение",
                "description": "",
                "added": "Wed Oct 26 2022 15:53:56",
                "_id": "63592de472e23dc8fc039d11"
            },
            {
                "word": "Behind",
                "translate": "За, позади",
                "description": "",
                "added": "Wed Oct 26 2022 15:54:13",
                "_id": "63592df672e23dc8fc039de3"
            },
            {
                "word": "Believe",
                "translate": "Верить, считать",
                "description": "",
                "added": "Wed Oct 26 2022 15:55:12",
                "_id": "63592e3072e23dc8fc039eb7"
            },
            {
                "word": "Benefit",
                "translate": "Привилегия, преимущество",
                "description": "",
                "added": "Wed Oct 26 2022 15:56:00",
                "_id": "63592e6072e23dc8fc039f8d"
            },
            {
                "word": "Best",
                "translate": "Лучший, самый лучший",
                "description": "",
                "added": "Wed Oct 26 2022 15:56:19",
                "_id": "63592e7472e23dc8fc03a065"
            },
            {
                "word": "Bet",
                "translate": "Ставить, держать пари",
                "description": "",
                "added": "Wed Oct 26 2022 15:56:51",
                "_id": "63592e9472e23dc8fc03a13f"
            },
            {
                "word": "Better",
                "translate": "Лучше",
                "description": "",
                "added": "Wed Oct 26 2022 15:57:02",
                "_id": "63592e9f72e23dc8fc03a21b"
            },
            {
                "word": "Between",
                "translate": "Между",
                "description": "",
                "added": "Wed Oct 26 2022 15:57:14",
                "_id": "63592eab72e23dc8fc03a2f9"
            },
            {
                "word": "Big",
                "translate": "Большой",
                "description": "",
                "added": "Wed Oct 26 2022 15:57:29",
                "_id": "63592eb972e23dc8fc03a3d9"
            },
            {
                "word": "Bill",
                "translate": "Счёт, законопроект",
                "description": "",
                "added": "Wed Oct 26 2022 15:58:02",
                "_id": "63592edb72e23dc8fc03a4bb"
            },
            {
                "word": "Bird",
                "translate": "Птица",
                "description": "",
                "added": "Wed Oct 26 2022 15:58:15",
                "_id": "63592ee772e23dc8fc03a59f"
            },
            {
                "word": "Birthday",
                "translate": "День рождения",
                "description": "",
                "added": "Wed Oct 26 2022 15:58:30",
                "_id": "63592ef672e23dc8fc03a685"
            },
            {
                "word": "Bite",
                "translate": "Кусать",
                "description": "",
                "added": "Wed Oct 26 2022 16:00:17",
                "_id": "63592f6172e23dc8fc03a7e1"
            },
            {
                "word": "Blame",
                "translate": "Винить",
                "description": "",
                "added": "Wed Oct 26 2022 16:00:41",
                "_id": "63592f7a72e23dc8fc03a8cb"
            },
            {
                "word": "Blow",
                "translate": "Дуть",
                "description": "",
                "added": "Wed Oct 26 2022 16:01:53",
                "_id": "63592fc172e23dc8fc03a9b7"
            },
            {
                "word": "Boat",
                "translate": "Лодка, судно",
                "description": "",
                "added": "Wed Oct 26 2022 16:02:10",
                "_id": "63592fd272e23dc8fc03aaa5"
            },
            {
                "word": "Body",
                "translate": "Тело, организм",
                "description": "",
                "added": "Wed Oct 26 2022 16:03:07",
                "_id": "6359300b72e23dc8fc03ab95"
            },
            {
                "word": "Book",
                "translate": "Книга, бронировать",
                "description": "",
                "added": "Wed Oct 26 2022 16:03:26",
                "_id": "6359301e72e23dc8fc03ac87"
            },
            {
                "word": "Border",
                "translate": "Граница",
                "description": "",
                "added": "Wed Oct 26 2022 16:03:39",
                "_id": "6359302b72e23dc8fc03ad7b"
            },
            {
                "word": "Born",
                "translate": "Рождаться",
                "description": "",
                "added": "Wed Oct 26 2022 16:03:50",
                "_id": "6359303672e23dc8fc03ae71"
            },
            {
                "word": "Borrow",
                "translate": "Занимать, брать в долг",
                "description": "Это когда мы берем у кого-то",
                "added": "Wed Oct 26 2022 16:04:14",
                "_id": "6359304e72e23dc8fc03af69"
            },
            {
                "word": "Boss",
                "translate": "Босс, начальник",
                "description": "",
                "added": "Wed Oct 26 2022 16:04:27",
                "_id": "6359305b72e23dc8fc03b063"
            },
            {
                "word": "Bottle",
                "translate": "Бутылка",
                "description": "",
                "added": "Wed Oct 26 2022 16:04:37",
                "_id": "6359306672e23dc8fc03b15f"
            },
            {
                "word": "Box",
                "translate": "Коробка",
                "description": "",
                "added": "Wed Oct 26 2022 16:04:56",
                "_id": "6359307872e23dc8fc03b25d"
            },
            {
                "word": "Brain",
                "translate": "Мозг",
                "description": "",
                "added": "Wed Oct 26 2022 16:05:04",
                "_id": "6359308172e23dc8fc03b35d"
            },
            {
                "word": "Boy",
                "translate": "Мальчик",
                "description": "",
                "added": "Wed Oct 26 2022 16:05:19",
                "_id": "6359308f72e23dc8fc03b45f"
            },
            {
                "word": "Branch",
                "translate": "Ветка, отделение",
                "description": "",
                "added": "Wed Oct 26 2022 16:05:37",
                "_id": "635930a172e23dc8fc03b563"
            },
            {
                "word": "Brand",
                "translate": "Марка",
                "description": "",
                "added": "Wed Oct 26 2022 16:05:46",
                "_id": "635930ab72e23dc8fc03b669"
            },
            {
                "word": "Brave",
                "translate": "Храбрый",
                "description": "",
                "added": "Wed Oct 26 2022 16:06:02",
                "_id": "635930ba72e23dc8fc03b771"
            },
            {
                "word": "Bread",
                "translate": "Хлеб",
                "description": "",
                "added": "Wed Oct 26 2022 16:06:13",
                "_id": "635930c572e23dc8fc03b87b"
            },
            {
                "word": "Break",
                "translate": "Сломать, разбить, разорвать, перерыв",
                "description": "",
                "added": "Wed Oct 26 2022 16:07:04",
                "_id": "635930f972e23dc8fc03b987"
            },
            {
                "word": "Breakfast",
                "translate": "Завтрак",
                "description": "",
                "added": "Wed Oct 26 2022 16:07:15",
                "_id": "6359310372e23dc8fc03ba95"
            },
            {
                "word": "Breathe",
                "translate": "Дышать",
                "description": "",
                "added": "Wed Oct 26 2022 16:07:36",
                "_id": "6359311872e23dc8fc03bba5"
            },
            {
                "word": "Breed",
                "translate": "Порода, разводить собак",
                "description": "",
                "added": "Wed Oct 26 2022 16:08:14",
                "_id": "6359313e72e23dc8fc03bcb7"
            },
            {
                "word": "Brick",
                "translate": "Кирпич",
                "description": "",
                "added": "Wed Oct 26 2022 16:08:27",
                "_id": "6359314b72e23dc8fc03bdcb"
            },
            {
                "word": "Bring",
                "translate": "Приносить",
                "description": "",
                "added": "Wed Oct 26 2022 16:08:42",
                "_id": "6359315b72e23dc8fc03bee1"
            },
            {
                "word": "Brother",
                "translate": "Брат",
                "description": "",
                "added": "Wed Oct 26 2022 16:08:53",
                "_id": "6359316572e23dc8fc03bff9"
            },
            {
                "word": "Build",
                "translate": "Строить, создавать",
                "description": "",
                "added": "Wed Oct 26 2022 16:09:06",
                "_id": "6359317272e23dc8fc03c113"
            },
            {
                "word": "Bus",
                "translate": "Автобус",
                "description": "",
                "added": "Wed Oct 26 2022 16:09:41",
                "_id": "6359319572e23dc8fc03c3d7"
            },
            {
                "word": "Busy",
                "translate": "Занятой, оживленный",
                "description": "",
                "added": "Wed Oct 26 2022 16:09:54",
                "_id": "635931a272e23dc8fc03c4f5"
            },
            {
                "word": "But",
                "translate": "Но",
                "description": "",
                "added": "Wed Oct 26 2022 16:10:00",
                "_id": "635931a972e23dc8fc03c615"
            },
            {
                "word": "Butter",
                "translate": "Масло",
                "description": "",
                "added": "Wed Oct 26 2022 16:10:08",
                "_id": "635931b072e23dc8fc03c737"
            },
            {
                "word": "Buy",
                "translate": "Покупать",
                "description": "",
                "added": "Wed Oct 26 2022 16:10:21",
                "_id": "635931bd72e23dc8fc03c85b"
            },
            {
                "word": "Bye",
                "translate": "Пока",
                "description": "",
                "added": "Wed Oct 26 2022 16:10:27",
                "_id": "635931c372e23dc8fc03c981"
            },
            {
                "word": "Brag",
                "translate": "Хвастаться, похвастаться",
                "description": "",
                "added": "Wed Oct 26 2022 16:11:07",
                "_id": "635931eb72e23dc8fc03caa9"
            },
            {
                "word": "Bench",
                "translate": "Скамейка, лавка",
                "description": "",
                "added": "Wed Oct 26 2022 16:11:31",
                "_id": "6359320372e23dc8fc03cbd3"
            },
            {
                "word": "Buddy",
                "translate": "Приятель, дружище",
                "description": "",
                "added": "Wed Oct 26 2022 16:11:54",
                "_id": "6359321a72e23dc8fc03ccff"
            },
            {
                "word": "Boring",
                "translate": "Скучно, скучный",
                "description": "",
                "added": "Wed Oct 26 2022 16:12:33",
                "_id": "6359324172e23dc8fc03ce2d"
            },
            {
                "word": "Badge",
                "translate": "значок, жетон, знак",
                "description": "",
                "added": "Wed Oct 26 2022 16:13:06",
                "_id": "6359326272e23dc8fc03cf5d"
            },
            {
                "word": "Bald",
                "translate": "Лысый, плешивый, лысеть",
                "description": "",
                "added": "Wed Oct 26 2022 16:13:44",
                "_id": "6359328872e23dc8fc03d08f"
            },
            {
                "word": "Cake",
                "translate": "Торт",
                "description": "",
                "added": "Wed Oct 26 2022 16:46:21",
                "_id": "63593a2e72e23dc8fc03e6b0"
            },
            {
                "word": "Call",
                "translate": "Звонить, называть",
                "description": "",
                "added": "Wed Oct 26 2022 16:46:42",
                "_id": "63593a4372e23dc8fc03e7e6"
            },
            {
                "word": "Calm",
                "translate": "Спокойный, тихий",
                "description": "",
                "added": "Wed Oct 26 2022 16:46:57",
                "_id": "63593a5272e23dc8fc03e91e"
            },
            {
                "word": "Can",
                "translate": "Можно, мочь, уметь",
                "description": "",
                "added": "Wed Oct 26 2022 16:47:17",
                "_id": "63593a6572e23dc8fc03ea58"
            },
            {
                "word": "Cancel",
                "translate": "Отменять, отмена",
                "description": "",
                "added": "Wed Oct 26 2022 16:47:26",
                "_id": "63593a6e72e23dc8fc03eb94"
            },
            {
                "word": "Candy",
                "translate": "Конфета",
                "description": "",
                "added": "Wed Oct 26 2022 16:47:40",
                "_id": "63593a7c72e23dc8fc03ecd2"
            },
            {
                "word": "Capital",
                "translate": "Столица, капитал",
                "description": "",
                "added": "Wed Oct 26 2022 16:48:29",
                "_id": "63593aad72e23dc8fc03ee12"
            },
            {
                "word": "Captain",
                "translate": "Капитан",
                "description": "",
                "added": "Wed Oct 26 2022 16:48:38",
                "_id": "63593ab672e23dc8fc03ef54"
            },
            {
                "word": "Car",
                "translate": "Машина",
                "description": "",
                "added": "Wed Oct 26 2022 16:48:52",
                "_id": "63593ac472e23dc8fc03f098"
            },
            {
                "word": "Card",
                "translate": "Карта",
                "description": "Пластиковый предмет",
                "added": "Wed Oct 26 2022 16:49:07",
                "_id": "63593ad372e23dc8fc03f1de"
            },
            {
                "word": "Career",
                "translate": "Карьера",
                "description": "",
                "added": "Wed Oct 26 2022 16:49:54",
                "_id": "63593b0272e23dc8fc03f326"
            },
            {
                "word": "Careful",
                "translate": "Осторожно, тщательно",
                "description": "",
                "added": "Wed Oct 26 2022 16:50:11",
                "_id": "63593b1472e23dc8fc03f470"
            },
            {
                "word": "Carpet",
                "translate": "Ковёр",
                "description": "",
                "added": "Wed Oct 26 2022 16:50:22",
                "_id": "63593b1e72e23dc8fc03f5bc"
            },
            {
                "word": "Case",
                "translate": "Дело, случай",
                "description": "",
                "added": "Wed Oct 26 2022 16:50:36",
                "_id": "63593b2c72e23dc8fc03f70a"
            },
            {
                "word": "Cash",
                "translate": "Наличные, наличные деньги",
                "description": "",
                "added": "Wed Oct 26 2022 16:51:02",
                "_id": "63593b4672e23dc8fc03f9a8"
            },
            {
                "word": "Castle",
                "translate": "Замок",
                "description": "",
                "added": "Wed Oct 26 2022 16:51:13",
                "_id": "63593b5172e23dc8fc03fafa"
            },
            {
                "word": "Cat",
                "translate": "Кот, кошка",
                "description": "",
                "added": "Wed Oct 26 2022 16:51:23",
                "_id": "63593b5b72e23dc8fc03fc4e"
            },
            {
                "word": "Catch",
                "translate": "Ловить, с поймать, догнать",
                "description": "",
                "added": "Wed Oct 26 2022 16:51:52",
                "_id": "63593b7872e23dc8fc03fda4"
            },
            {
                "word": "Category",
                "translate": "Категория",
                "description": "",
                "added": "Wed Oct 26 2022 16:52:07",
                "_id": "63593b8772e23dc8fc03fefc"
            },
            {
                "word": "Chair",
                "translate": "Стул",
                "description": "",
                "added": "Wed Oct 26 2022 16:52:56",
                "_id": "63593bb972e23dc8fc040056"
            },
            {
                "word": "Challenge",
                "translate": "Испытание, вызов",
                "description": "",
                "added": "Wed Oct 26 2022 16:53:13",
                "_id": "63593bc972e23dc8fc0401b2"
            },
            {
                "word": "Chance",
                "translate": "Возможность, случай, шанс",
                "description": "",
                "added": "Wed Oct 26 2022 16:53:38",
                "_id": "63593be272e23dc8fc040310"
            },
            {
                "word": "Change",
                "translate": "Менять, изменять",
                "description": "",
                "added": "Wed Oct 26 2022 16:54:03",
                "_id": "63593bfb72e23dc8fc040520"
            },
            {
                "word": "Character",
                "translate": "Характер, черта",
                "description": "",
                "added": "Wed Oct 26 2022 16:54:24",
                "_id": "63593c1072e23dc8fc040682"
            },
            {
                "word": "Cheap",
                "translate": "Дешево, дешевый, недорогой",
                "description": "",
                "added": "Wed Oct 26 2022 16:54:42",
                "_id": "63593c2272e23dc8fc0407e6"
            },
            {
                "word": "Country",
                "translate": "Страна",
                "description": "",
                "added": "Fri Oct 28 2022 13:13:55",
                "_id": "635bab63c99bf432b5cdc92c"
            },
            {
                "word": "City",
                "translate": "Город",
                "description": "",
                "added": "Fri Oct 28 2022 13:14:36",
                "_id": "635bab8cc99bf432b5cdcb47"
            },
            {
                "word": "Community",
                "translate": "Сообщество, община",
                "description": "",
                "added": "Fri Oct 28 2022 13:14:58",
                "_id": "635baba2c99bf432b5cdccb1"
            },
            {
                "word": "Clean",
                "translate": "Чисто, убирать, уборка",
                "description": "",
                "added": "Fri Oct 28 2022 13:15:18",
                "_id": "635babb6c99bf432b5cdce1d"
            },
            {
                "word": "Certain",
                "translate": "Определенный",
                "description": "",
                "added": "Fri Oct 28 2022 13:15:43",
                "_id": "635babcfc99bf432b5cdcf8b"
            },
            {
                "word": "Current",
                "translate": "Нынешний, текущий",
                "description": "",
                "added": "Fri Oct 28 2022 13:16:03",
                "_id": "635babe3c99bf432b5cdd0fb"
            },
            {
                "word": "Common",
                "translate": "Общий, распространенный, обычный",
                "description": "",
                "added": "Fri Oct 28 2022 13:16:48",
                "_id": "635bac1bc99bf432b5cdda56"
            },
            {
                "word": "Close",
                "translate": "Закрывать, близкие, близко",
                "description": "",
                "added": "Fri Oct 28 2022 13:18:07",
                "_id": "635bac5fc99bf432b5cddeac"
            },
            {
                "word": "Cold",
                "translate": "Холод",
                "description": "",
                "added": "Fri Oct 28 2022 13:18:18",
                "_id": "635bac6ac99bf432b5cde022"
            },
            {
                "word": "Come",
                "translate": "Прийти, приходить",
                "description": "",
                "added": "Fri Oct 28 2022 13:18:40",
                "_id": "635bac80c99bf432b5cde19a"
            },
            {
                "word": "Create",
                "translate": "Создавать, творить",
                "description": "",
                "added": "Fri Oct 28 2022 13:18:57",
                "_id": "635bac91c99bf432b5cde314"
            },
            {
                "word": "Daily",
                "translate": "Ежедневно, ежедневный",
                "description": "",
                "added": "Fri Oct 28 2022 13:34:32",
                "_id": "635bb038c99bf432b5cdf707"
            },
            {
                "word": "Damage",
                "translate": "Повреждение, урон, ущерб",
                "description": "",
                "added": "Fri Oct 28 2022 13:34:54",
                "_id": "635bb04ec99bf432b5cdf885"
            },
            {
                "word": "Damp",
                "translate": "Влажность, сырость",
                "description": "",
                "added": "Fri Oct 28 2022 13:36:08",
                "_id": "635bb098c99bf432b5cdfa05"
            },
            {
                "word": "Dance",
                "translate": "Танец, танцевать",
                "description": "",
                "added": "Fri Oct 28 2022 13:36:18",
                "_id": "635bb0a2c99bf432b5cdfb87"
            },
            {
                "word": "Danger",
                "translate": "Опасность, угроза",
                "description": "",
                "added": "Fri Oct 28 2022 13:36:28",
                "_id": "635bb0adc99bf432b5cdfd0b"
            },
            {
                "word": "Data",
                "translate": "Данные",
                "description": "",
                "added": "Fri Oct 28 2022 13:36:52",
                "_id": "635bb0c4c99bf432b5cdfe91"
            },
            {
                "word": "Date",
                "translate": "Дата, свидание, финик, срок",
                "description": "",
                "added": "Fri Oct 28 2022 13:37:24",
                "_id": "635bb0e4c99bf432b5ce0019"
            },
            {
                "word": "Daughter",
                "translate": "Дочь",
                "description": "",
                "added": "Fri Oct 28 2022 13:37:39",
                "_id": "635bb0f3c99bf432b5ce01a3"
            },
            {
                "word": "Day",
                "translate": "День, сутки",
                "description": "",
                "added": "Fri Oct 28 2022 13:37:55",
                "_id": "635bb103c99bf432b5ce032f"
            },
            {
                "word": "Dead",
                "translate": "Мертвый",
                "description": "",
                "added": "Fri Oct 28 2022 13:38:32",
                "_id": "635bb128c99bf432b5ce04bd"
            },
            {
                "word": "Deaf",
                "translate": "Глухой",
                "description": "",
                "added": "Fri Oct 28 2022 13:38:50",
                "_id": "635bb13ac99bf432b5ce064d"
            },
            {
                "word": "Deal",
                "translate": "Сделка, дело",
                "description": "",
                "added": "Fri Oct 28 2022 13:39:12",
                "_id": "635bb150c99bf432b5ce07df"
            },
            {
                "word": "Dear",
                "translate": "Уважаемый, дорогой",
                "description": "",
                "added": "Fri Oct 28 2022 13:40:05",
                "_id": "635bb185c99bf432b5ce0974"
            },
            {
                "word": "Death",
                "translate": "Смерть, гибель",
                "description": "",
                "added": "Fri Oct 28 2022 13:40:45",
                "_id": "635bb1adc99bf432b5ce0b0a"
            },
            {
                "word": "Debt",
                "translate": "Долг",
                "description": "",
                "added": "Fri Oct 28 2022 13:41:21",
                "_id": "635bb1d1c99bf432b5ce0ca2"
            },
            {
                "word": "Destroy",
                "translate": "Уничтожить, разрушить",
                "description": "",
                "added": "Fri Oct 28 2022 13:41:42",
                "_id": "635bb1e6c99bf432b5ce0e3c"
            },
            {
                "word": "Decide",
                "translate": "Решиться, принять решение",
                "description": "",
                "added": "Fri Oct 28 2022 13:42:23",
                "_id": "635bb210c99bf432b5ce1240"
            },
            {
                "word": "Declare",
                "translate": "Объявить, заявить",
                "description": "",
                "added": "Fri Oct 28 2022 13:42:43",
                "_id": "635bb223c99bf432b5ce13de"
            },
            {
                "word": "Decorate",
                "translate": "Украшать, декорировать",
                "description": "",
                "added": "Fri Oct 28 2022 13:43:11",
                "_id": "635bb23fc99bf432b5ce157e"
            },
            {
                "word": "Decoration",
                "translate": "Декорации, украшения",
                "description": "",
                "added": "Fri Oct 28 2022 13:43:50",
                "_id": "635bb267c99bf432b5ce1720"
            },
            {
                "word": "Decrease",
                "translate": "Уменьшение, уменьшать",
                "description": "",
                "added": "Fri Oct 28 2022 13:44:08",
                "_id": "635bb278c99bf432b5ce18c4"
            },
            {
                "word": "Delay",
                "translate": "Задержка, откладывать",
                "description": "",
                "added": "Fri Oct 28 2022 13:45:35",
                "_id": "635bb2cfc99bf432b5ce1a6a"
            },
            {
                "word": "Delivery",
                "translate": "Доставка",
                "description": "",
                "added": "Fri Oct 28 2022 13:45:51",
                "_id": "635bb2e0c99bf432b5ce1c12"
            },
            {
                "word": "Demand",
                "translate": "Требовать, спрос",
                "description": "",
                "added": "Fri Oct 28 2022 13:46:15",
                "_id": "635bb2f9c99bf432b5ce1dbc"
            },
            {
                "word": "Deny",
                "translate": "Отрицать",
                "description": "",
                "added": "Fri Oct 28 2022 13:46:50",
                "_id": "635bb31bc99bf432b5ce1f68"
            },
            {
                "word": "Depth",
                "translate": "Глубина",
                "description": "",
                "added": "Fri Oct 28 2022 13:47:12",
                "_id": "635bb330c99bf432b5ce2116"
            },
            {
                "word": "Description",
                "translate": "Описание",
                "description": "",
                "added": "Fri Oct 28 2022 13:47:27",
                "_id": "635bb33fc99bf432b5ce22c6"
            },
            {
                "word": "Despite",
                "translate": "Несмотря на",
                "description": "",
                "added": "Fri Oct 28 2022 13:47:45",
                "_id": "635bb351c99bf432b5ce2478"
            },
            {
                "word": "Detail",
                "translate": "Подробность, деталь",
                "description": "",
                "added": "Fri Oct 28 2022 13:48:23",
                "_id": "635bb377c99bf432b5ce262c"
            },
            {
                "word": "Develop",
                "translate": "Развивать, разрабатывать",
                "description": "",
                "added": "Fri Oct 28 2022 13:49:27",
                "_id": "635bb3b7c99bf432b5ce27e2"
            },
            {
                "word": "Device",
                "translate": "Прибор, устройство",
                "description": "",
                "added": "Fri Oct 28 2022 13:49:56",
                "_id": "635bb3d5c99bf432b5ce299a"
            },
            {
                "word": "Die",
                "translate": "Умирать, погибнуть",
                "description": "",
                "added": "Fri Oct 28 2022 13:50:22",
                "_id": "635bb3eec99bf432b5ce2b54"
            },
            {
                "word": "Difference",
                "translate": "Разница, различие",
                "description": "",
                "added": "Fri Oct 28 2022 13:50:45",
                "_id": "635bb405c99bf432b5ce2d10"
            },
            {
                "word": "Different",
                "translate": "Разный, непохожий",
                "description": "",
                "added": "Fri Oct 28 2022 13:51:10",
                "_id": "635bb41fc99bf432b5ce2ece"
            },
            {
                "word": "Difficult",
                "translate": "Трудный, сложный",
                "description": "",
                "added": "Fri Oct 28 2022 13:51:33",
                "_id": "635bb435c99bf432b5ce308e"
            },
            {
                "word": "Dig",
                "translate": "Копать, рыть яму",
                "description": "",
                "added": "Fri Oct 28 2022 13:51:42",
                "_id": "635bb43ec99bf432b5ce3250"
            },
            {
                "word": "Dinner",
                "translate": "Ужин",
                "description": "",
                "added": "Fri Oct 28 2022 13:51:53",
                "_id": "635bb44ac99bf432b5ce3414"
            },
            {
                "word": "Direction",
                "translate": "Направление, руководство",
                "description": "",
                "added": "Fri Oct 28 2022 13:52:11",
                "_id": "635bb45bc99bf432b5ce35da"
            },
            {
                "word": "Dirt",
                "translate": "Грязь",
                "description": "",
                "added": "Fri Oct 28 2022 13:53:46",
                "_id": "635bb4bbc99bf432b5ce46b5"
            },
            {
                "word": "Dirty",
                "translate": "Грязный, непристойный",
                "description": "",
                "added": "Fri Oct 28 2022 13:54:11",
                "_id": "635bb4d3c99bf432b5ce487f"
            },
            {
                "word": "Discount",
                "translate": "Скидка",
                "description": "",
                "added": "Fri Oct 28 2022 13:54:54",
                "_id": "635bb4fec99bf432b5ce4a4b"
            },
            {
                "word": "Discover",
                "translate": "Обнаружить, раскрыть",
                "description": "",
                "added": "Fri Oct 28 2022 13:55:53",
                "_id": "635bb539c99bf432b5ce4c19"
            },
            {
                "word": "Dish",
                "translate": "Блюдо, посуда",
                "description": "",
                "added": "Fri Oct 28 2022 13:57:01",
                "_id": "635bb57dc99bf432b5ce4de9"
            },
            {
                "word": "Distance",
                "translate": "Расстояние, даль",
                "description": "",
                "added": "Fri Oct 28 2022 13:58:40",
                "_id": "635bb5e0c99bf432b5ce4fbb"
            },
            {
                "word": "Document",
                "translate": "Документ",
                "description": "",
                "added": "Fri Oct 28 2022 13:59:02",
                "_id": "635bb5f6c99bf432b5ce518f"
            },
            {
                "word": "Dominate",
                "translate": "Доминировать, господствовать",
                "description": "",
                "added": "Fri Oct 28 2022 13:59:19",
                "_id": "635bb607c99bf432b5ce5365"
            },
            {
                "word": "Door",
                "translate": "Дверь",
                "description": "",
                "added": "Fri Oct 28 2022 13:59:31",
                "_id": "635bb613c99bf432b5ce553d"
            },
            {
                "word": "Dot",
                "translate": "Точка",
                "description": "",
                "added": "Fri Oct 28 2022 13:59:37",
                "_id": "635bb61ac99bf432b5ce5717"
            },
            {
                "word": "Double",
                "translate": "Двойной",
                "description": "",
                "added": "Fri Oct 28 2022 14:00:17",
                "_id": "635bb642c99bf432b5ce5ace"
            },
            {
                "word": "Draw",
                "translate": "Рисовать, черпать, ничья, жеребьевка",
                "description": "",
                "added": "Fri Oct 28 2022 14:02:31",
                "_id": "635bb6c8c99bf432b5ce5cac"
            },
            {
                "word": "Dream",
                "translate": "Сон, мечта",
                "description": "",
                "added": "Fri Oct 28 2022 14:02:44",
                "_id": "635bb6d4c99bf432b5ce5e8c"
            },
            {
                "word": "Drink",
                "translate": "Пить, выпивать",
                "description": "",
                "added": "Fri Oct 28 2022 14:02:58",
                "_id": "635bb6e3c99bf432b5ce606e"
            },
            {
                "word": "Each other",
                "translate": "Друг друга",
                "description": "",
                "added": "Fri Oct 28 2022 14:05:00",
                "_id": "635bb75cc99bf432b5ce6bbc"
            },
            {
                "word": "Ear",
                "translate": "Ухо",
                "description": "",
                "added": "Fri Oct 28 2022 14:05:16",
                "_id": "635bb76cc99bf432b5ce6e94"
            },
            {
                "word": "Early",
                "translate": "Ранний, рано",
                "description": "",
                "added": "Fri Oct 28 2022 14:05:43",
                "_id": "635bb788c99bf432b5ce707c"
            },
            {
                "word": "Earn",
                "translate": "Зарабатывать",
                "description": "",
                "added": "Fri Oct 28 2022 14:05:57",
                "_id": "635bb796c99bf432b5ce7266"
            },
            {
                "word": "Earth",
                "translate": "Земля",
                "description": "",
                "added": "Fri Oct 28 2022 14:06:06",
                "_id": "635bb79fc99bf432b5ce7452"
            },
            {
                "word": "Eat",
                "translate": "Есть, кушать",
                "description": "",
                "added": "Fri Oct 28 2022 14:06:19",
                "_id": "635bb7abc99bf432b5ce7640"
            },
            {
                "word": "Economy",
                "translate": "Экономика",
                "description": "",
                "added": "Fri Oct 28 2022 14:06:52",
                "_id": "635bb7ccc99bf432b5ce7928"
            },
            {
                "word": "Edge",
                "translate": "Край",
                "description": "Край чего-то",
                "added": "Fri Oct 28 2022 14:07:40",
                "_id": "635bb7fcc99bf432b5ce7b1a"
            },
            {
                "word": "Edition",
                "translate": "Издание, выпуск",
                "description": "",
                "added": "Fri Oct 28 2022 14:08:15",
                "_id": "635bb81fc99bf432b5ce7e08"
            },
            {
                "word": "Educate",
                "translate": "Обучать, давать образование",
                "description": "",
                "added": "Fri Oct 28 2022 14:08:29",
                "_id": "635bb82dc99bf432b5ce7ffe"
            },
            {
                "word": "Education",
                "translate": "Образование",
                "description": "",
                "added": "Fri Oct 28 2022 14:08:37",
                "_id": "635bb835c99bf432b5ce81f6"
            },
            {
                "word": "Effort",
                "translate": "Усилие, попытка",
                "description": "",
                "added": "Fri Oct 28 2022 14:08:59",
                "_id": "635bb84bc99bf432b5ce83f0"
            },
            {
                "word": "Else",
                "translate": "Ещё",
                "description": "",
                "added": "Fri Oct 28 2022 14:11:14",
                "_id": "635bb8d2c99bf432b5ce85ec"
            },
            {
                "word": "Employer",
                "translate": "Работодатель",
                "description": "",
                "added": "Fri Oct 28 2022 14:11:43",
                "_id": "635bb8efc99bf432b5ce87ea"
            },
            {
                "word": "Empty",
                "translate": "Пустой, опорожняться",
                "description": "",
                "added": "Fri Oct 28 2022 14:11:56",
                "_id": "635bb8fcc99bf432b5ce89ea"
            },
            {
                "word": "Enemy",
                "translate": "Враг, противник",
                "description": "",
                "added": "Fri Oct 28 2022 14:12:15",
                "_id": "635bb90fc99bf432b5ce8bec"
            },
            {
                "word": "Energy",
                "translate": "Энергия",
                "description": "",
                "added": "Fri Oct 28 2022 14:12:27",
                "_id": "635bb91bc99bf432b5ce8df0"
            },
            {
                "word": "Engineer",
                "translate": "Инженер, машинист",
                "description": "",
                "added": "Fri Oct 28 2022 14:13:11",
                "_id": "635bb948c99bf432b5ce8ff6"
            },
            {
                "word": "Enough",
                "translate": "Достаточно, довольно",
                "description": "",
                "added": "Fri Oct 28 2022 14:13:49",
                "_id": "635bb96dc99bf432b5ce91fe"
            },
            {
                "word": "Enter",
                "translate": "Войти",
                "description": "",
                "added": "Fri Oct 28 2022 14:14:23",
                "_id": "635bb98fc99bf432b5ce9408"
            },
            {
                "word": "Especially",
                "translate": "Особенно, специально",
                "description": "",
                "added": "Fri Oct 28 2022 14:14:45",
                "_id": "635bb9a5c99bf432b5ce9614"
            },
            {
                "word": "Event",
                "translate": "Событие, мероприятие",
                "description": "",
                "added": "Fri Oct 28 2022 14:15:05",
                "_id": "635bb9b9c99bf432b5ce9822"
            },
            {
                "word": "Evil",
                "translate": "Злой, злой",
                "description": "",
                "added": "Fri Oct 28 2022 14:15:23",
                "_id": "635bb9cbc99bf432b5ce9a32"
            },
            {
                "word": "Example",
                "translate": "Пример, образец",
                "description": "",
                "added": "Fri Oct 28 2022 14:16:09",
                "_id": "635bb9f9c99bf432b5ce9c44"
            },
            {
                "word": "Except",
                "translate": "Кроме",
                "description": "",
                "added": "Fri Oct 28 2022 14:16:17",
                "_id": "635bba01c99bf432b5ce9e58"
            },
            {
                "word": "Exercise",
                "translate": "Упражнение",
                "description": "",
                "added": "Fri Oct 28 2022 14:17:02",
                "_id": "635bba2ec99bf432b5cea38c"
            },
            {
                "word": "Exit",
                "translate": "Выход",
                "description": "",
                "added": "Fri Oct 28 2022 14:17:16",
                "_id": "635bba3cc99bf432b5cea5a4"
            },
            {
                "word": "Expand",
                "translate": "Расширять, расширяться",
                "description": "",
                "added": "Fri Oct 28 2022 14:17:29",
                "_id": "635bba49c99bf432b5cea7be"
            },
            {
                "word": "Expect",
                "translate": "Ожидать",
                "description": "Ждать чего-то запланированное",
                "added": "Fri Oct 28 2022 14:17:47",
                "_id": "635bba5bc99bf432b5cea9da"
            },
            {
                "word": "Expensive",
                "translate": "Дорого",
                "description": "",
                "added": "Fri Oct 28 2022 14:18:00",
                "_id": "635bba68c99bf432b5ceabf8"
            },
            {
                "word": "Face",
                "translate": "Лицо",
                "description": "",
                "added": "Fri Nov 04 2022 12:52:59",
                "_id": "6364e0fcbec30683021c78f6"
            },
            {
                "word": "Fact",
                "translate": "Факт, истина",
                "description": "",
                "added": "Fri Nov 04 2022 12:54:14",
                "_id": "6364e146bec30683021c7b18"
            },
            {
                "word": "Factory",
                "translate": "Завод, фабрика",
                "description": "",
                "added": "Fri Nov 04 2022 12:55:59",
                "_id": "6364e1afbec30683021c7d3c"
            },
            {
                "word": "Fail",
                "translate": "Терпеть неудачу, провалиться",
                "description": "",
                "added": "Fri Nov 04 2022 12:56:46",
                "_id": "6364e1dfbec30683021c8186"
            },
            {
                "word": "Fair",
                "translate": "Справедливый, честный",
                "description": "",
                "added": "Fri Nov 04 2022 12:57:24",
                "_id": "6364e204bec30683021c83ae"
            },
            {
                "word": "Fall",
                "translate": "Падать, падение",
                "description": "",
                "added": "Fri Nov 04 2022 12:57:50",
                "_id": "6364e21ebec30683021c85d8"
            },
            {
                "word": "False",
                "translate": "Ложный, фальшивый",
                "description": "",
                "added": "Fri Nov 04 2022 12:58:28",
                "_id": "6364e244bec30683021c8804"
            },
            {
                "word": "Family",
                "translate": "Семья",
                "description": "",
                "added": "Fri Nov 04 2022 12:58:41",
                "_id": "6364e251bec30683021c8a32"
            },
            {
                "word": "Famous",
                "translate": "Знаменитый",
                "description": "",
                "added": "Fri Nov 04 2022 12:58:50",
                "_id": "6364e25abec30683021c8c62"
            },
            {
                "word": "Fan",
                "translate": "Поклонник, фанат",
                "description": "",
                "added": "Fri Nov 04 2022 12:59:29",
                "_id": "6364e281bec30683021c8e94"
            },
            {
                "word": "Farm",
                "translate": "Ферма",
                "description": "",
                "added": "Fri Nov 04 2022 13:04:32",
                "_id": "6364e3b1bec30683021c9761"
            },
            {
                "word": "Farmer",
                "translate": "Фермер",
                "description": "",
                "added": "Fri Nov 04 2022 13:04:42",
                "_id": "6364e3babec30683021c9997"
            },
            {
                "word": "Funny",
                "translate": "Смешной, забавный",
                "description": "",
                "added": "Fri Nov 04 2022 13:05:57",
                "_id": "6364e405bec30683021c9bcf"
            },
            {
                "word": "Garden",
                "translate": "Сад",
                "description": "",
                "added": "Fri Nov 04 2022 13:07:28",
                "_id": "6364e461bec30683021c9e09"
            },
            {
                "word": "Gate",
                "translate": "Ворота, калитка",
                "description": "",
                "added": "Fri Nov 04 2022 13:07:48",
                "_id": "6364e474bec30683021ca045"
            },
            {
                "word": "Girl",
                "translate": "Девушка, девочка",
                "description": "",
                "added": "Fri Nov 04 2022 13:08:24",
                "_id": "6364e498bec30683021ca283"
            },
            {
                "word": "Give",
                "translate": "Давать",
                "description": "",
                "added": "Fri Nov 04 2022 13:08:34",
                "_id": "6364e4a2bec30683021ca4c3"
            },
            {
                "word": "Glad",
                "translate": "Рад, радостный",
                "description": "",
                "added": "Fri Nov 04 2022 13:08:58",
                "_id": "6364e4babec30683021ca705"
            },
            {
                "word": "Glass",
                "translate": "Стакан, стекло",
                "description": "",
                "added": "Fri Nov 04 2022 13:09:33",
                "_id": "6364e4ddbec30683021ca949"
            },
            {
                "word": "Go",
                "translate": "Идти",
                "description": "",
                "added": "Fri Nov 04 2022 13:09:49",
                "_id": "6364e4edbec30683021cab8f"
            },
            {
                "word": "God",
                "translate": "Бог",
                "description": "",
                "added": "Fri Nov 04 2022 13:10:06",
                "_id": "6364e4febec30683021cadd7"
            },
            {
                "word": "Gold",
                "translate": "Золото",
                "description": "",
                "added": "Fri Nov 04 2022 13:10:15",
                "_id": "6364e507bec30683021cb021"
            },
            {
                "word": "Free",
                "translate": "Свободный, бесплатный",
                "description": "",
                "added": "Fri Nov 04 2022 13:12:06",
                "_id": "6364e576bec30683021cc029"
            },
            {
                "word": "Full",
                "translate": "Полный, полноценный",
                "description": "",
                "added": "Fri Nov 04 2022 13:12:33",
                "_id": "6364e591bec30683021cc39d"
            },
            {
                "word": "Foreign",
                "translate": "Иностранный, зарубежный",
                "description": "",
                "added": "Fri Nov 04 2022 13:13:25",
                "_id": "6364e5c6bec30683021cc83b"
            },
            {
                "word": "Finish",
                "translate": "Закончить, завершить",
                "description": "",
                "added": "Fri Nov 04 2022 13:13:58",
                "_id": "6364e5e6bec30683021cca8d"
            },
            {
                "word": "Final",
                "translate": "Окончательный, последний",
                "description": "",
                "added": "Fri Nov 04 2022 13:14:17",
                "_id": "6364e5f9bec30683021ccce1"
            },
            {
                "word": "Follow",
                "translate": "Следовать, следить за",
                "description": "",
                "added": "Fri Nov 04 2022 13:15:16",
                "_id": "6364e634bec30683021ccf37"
            },
            {
                "word": "Feel",
                "translate": "Чувствовать, ощущать",
                "description": "",
                "added": "Fri Nov 04 2022 13:15:54",
                "_id": "6364e65abec30683021cd18f"
            },
            {
                "word": "Fool",
                "translate": "Дурак, глупец",
                "description": "",
                "added": "Fri Nov 04 2022 13:16:09",
                "_id": "6364e669bec30683021cd3e9"
            },
            {
                "word": "Forgive",
                "translate": "Простить, прощать",
                "description": "",
                "added": "Fri Nov 04 2022 13:16:32",
                "_id": "6364e681bec30683021cd645"
            },
            {
                "word": "Fang",
                "translate": "Клык",
                "description": "",
                "added": "Fri Nov 04 2022 13:16:43",
                "_id": "6364e68bbec30683021cd8a3"
            },
            {
                "word": "Fascinate",
                "translate": "Очаровывать, завораживать",
                "description": "",
                "added": "Fri Nov 04 2022 13:20:47",
                "_id": "6364e77fbec30683021d2f0d"
            },
            {
                "word": "Fiction",
                "translate": "Вымысел, художественная литература",
                "description": "",
                "added": "Fri Nov 04 2022 13:21:26",
                "_id": "6364e7a6bec30683021d316f"
            },
            {
                "word": "Fill",
                "translate": "Заполнять, наполнять",
                "description": "",
                "added": "Fri Nov 04 2022 13:24:07",
                "_id": "6364e847bec30683021d5b2b"
            },
            {
                "word": "Friendly",
                "translate": "Дружественный, дружелюбный",
                "description": "",
                "added": "Fri Nov 04 2022 13:30:00",
                "_id": "6364e9a8bec30683021d8c31"
            },
            {
                "word": "First",
                "translate": "Первый, сначала",
                "description": "",
                "added": "Fri Nov 04 2022 13:30:53",
                "_id": "6364e9ddbec30683021d9499"
            },
            {
                "word": "Feed",
                "translate": "Кормить, накормить",
                "description": "",
                "added": "Fri Nov 04 2022 13:31:24",
                "_id": "6364e9fcbec30683021d9703"
            },
            {
                "word": "Favor",
                "translate": "Услуга, одолжение",
                "description": "",
                "added": "Fri Nov 04 2022 13:31:41",
                "_id": "6364ea0dbec30683021d996f"
            },
            {
                "word": "Field",
                "translate": "Поле",
                "description": "",
                "added": "Fri Nov 04 2022 13:31:54",
                "_id": "6364ea1abec30683021d9bdd"
            },
            {
                "word": "Flaw",
                "translate": "Недостаток, изъян",
                "description": "",
                "added": "Fri Nov 04 2022 13:32:09",
                "_id": "6364ea29bec30683021d9e4d"
            },
            {
                "word": "Fly",
                "translate": "Летать, лететь",
                "description": "",
                "added": "Fri Nov 04 2022 13:32:27",
                "_id": "6364ea3bbec30683021da0bf"
            },
            {
                "word": "Forbid",
                "translate": "Запретить, запрещать",
                "description": "",
                "added": "Fri Nov 04 2022 13:32:44",
                "_id": "6364ea4cbec30683021da333"
            },
            {
                "word": "Forget",
                "translate": "Забыть, забывать",
                "description": "",
                "added": "Fri Nov 04 2022 13:33:17",
                "_id": "6364ea6dbec30683021da5a9"
            },
            {
                "word": "Finally",
                "translate": "Наконец-то, наконец",
                "description": "",
                "added": "Fri Nov 04 2022 13:33:38",
                "_id": "6364ea82bec30683021da821"
            },
            {
                "word": "Flexibility",
                "translate": "Гибкость",
                "description": "",
                "added": "Fri Nov 04 2022 13:34:05",
                "_id": "6364ea9dbec30683021daa9b"
            },
            {
                "word": "A few",
                "translate": "Несколько, некоторые",
                "description": "Когда мы говорим о 3-4 вещах, не больше",
                "added": "Fri Nov 04 2022 13:34:44",
                "_id": "6364eac4bec30683021dad17"
            },
            {
                "word": "Group",
                "translate": "Группа",
                "description": "",
                "added": "Fri Nov 04 2022 13:35:07",
                "_id": "6364eadbbec30683021daf95"
            },
            {
                "word": "Government",
                "translate": "Правительство, власть",
                "description": "",
                "added": "Fri Nov 04 2022 13:35:45",
                "_id": "6364eb01bec30683021db215"
            },
            {
                "word": "Game",
                "translate": "игра",
                "description": "",
                "added": "Fri Nov 04 2022 13:35:50",
                "_id": "6364eb06bec30683021db497"
            },
            {
                "word": "Guy",
                "translate": "Парень",
                "description": "",
                "added": "Fri Nov 04 2022 13:36:02",
                "_id": "6364eb12bec30683021db71b"
            },
            {
                "word": "Great",
                "translate": "Великий, отлично",
                "description": "",
                "added": "Fri Nov 04 2022 13:36:28",
                "_id": "6364eb2cbec30683021db9a1"
            },
            {
                "word": "Get",
                "translate": "Получать",
                "description": "",
                "added": "Fri Nov 04 2022 13:36:42",
                "_id": "6364eb3abec30683021dbc29"
            },
            {
                "word": "Grow",
                "translate": "Расти, выращивать",
                "description": "",
                "added": "Fri Nov 04 2022 13:37:30",
                "_id": "6364eb6abec30683021dbff7"
            },
            {
                "word": "Guess",
                "translate": "Угадать, догадаться",
                "description": "",
                "added": "Fri Nov 04 2022 13:37:51",
                "_id": "6364eb7fbec30683021dc283"
            },
            {
                "word": "Graveyard",
                "translate": "Кладбище",
                "description": "",
                "added": "Fri Nov 04 2022 13:38:43",
                "_id": "6364ebb4bec30683021dc511"
            },
            {
                "word": "Guard",
                "translate": "Охрана, сторожить, охранять",
                "description": "",
                "added": "Fri Nov 04 2022 13:39:25",
                "_id": "6364ebddbec30683021dc7a1"
            },
            {
                "word": "Gym",
                "translate": "Тренажерный зал",
                "description": "",
                "added": "Fri Nov 04 2022 13:39:42",
                "_id": "6364ebeebec30683021dca33"
            },
            {
                "word": "Gab",
                "translate": "Болтать, трепаться",
                "description": "",
                "added": "Fri Nov 04 2022 13:40:13",
                "_id": "6364ec0dbec30683021dccc8"
            },
            {
                "word": "Head",
                "translate": "Голова, глава",
                "description": "",
                "added": "Fri Nov 04 2022 13:42:05",
                "_id": "6364ec7ebec30683021debba"
            },
            {
                "word": "Home",
                "translate": "Дом",
                "description": "Когда мы говорим о доме к которому есть привязанность",
                "added": "Fri Nov 04 2022 13:42:43",
                "_id": "6364eca3bec30683021dee52"
            },
            {
                "word": "House",
                "translate": "Дом",
                "description": "Когда мы говорим о любом доме",
                "added": "Fri Nov 04 2022 13:43:02",
                "_id": "6364ecb7bec30683021df0ec"
            },
            {
                "word": "Health",
                "translate": "Здоровье",
                "description": "",
                "added": "Fri Nov 04 2022 13:43:25",
                "_id": "6364eccdbec30683021df388"
            },
            {
                "word": "History",
                "translate": "История",
                "description": "",
                "added": "Fri Nov 04 2022 13:43:35",
                "_id": "6364ecd7bec30683021df626"
            },
            {
                "word": "High",
                "translate": "Высокие, большие",
                "description": "",
                "added": "Fri Nov 04 2022 13:43:56",
                "_id": "6364ececbec30683021df8c6"
            },
            {
                "word": "Hard",
                "translate": "Трудно, усердно, жестко",
                "description": "",
                "added": "Fri Nov 04 2022 13:44:15",
                "_id": "6364ecffbec30683021dfb68"
            },
            {
                "word": "Hot",
                "translate": "Горячий",
                "description": "",
                "added": "Fri Nov 04 2022 13:44:36",
                "_id": "6364ed14bec30683021dfe0c"
            },
            {
                "word": "Happy",
                "translate": "Счастливый",
                "description": "",
                "added": "Fri Nov 04 2022 13:44:52",
                "_id": "6364ed24bec30683021e00b2"
            },
            {
                "word": "Huge",
                "translate": "Огромный, большой",
                "description": "",
                "added": "Fri Nov 04 2022 13:45:10",
                "_id": "6364ed36bec30683021e035a"
            },
            {
                "word": "Help",
                "translate": "Помощь, помогать",
                "description": "",
                "added": "Fri Nov 04 2022 13:45:33",
                "_id": "6364ed4dbec30683021e0604"
            },
            {
                "word": "Hear",
                "translate": "Слышать, услышать",
                "description": "",
                "added": "Fri Nov 04 2022 13:45:46",
                "_id": "6364ed5abec30683021e08b0"
            },
            {
                "word": "Hold",
                "translate": "Держать, удерживать",
                "description": "",
                "added": "Fri Nov 04 2022 13:46:25",
                "_id": "6364ed81bec30683021e0b5e"
            },
            {
                "word": "Happen",
                "translate": "Случаться, произойти",
                "description": "",
                "added": "Fri Nov 04 2022 13:47:46",
                "_id": "6364edd2bec30683021e0e0e"
            },
            {
                "word": "Horse",
                "translate": "Лошадь, конь",
                "description": "",
                "added": "Fri Nov 04 2022 13:48:00",
                "_id": "6364ede1bec30683021e10c0"
            },
            {
                "word": "Heart",
                "translate": "Сердце",
                "description": "",
                "added": "Fri Nov 04 2022 13:48:16",
                "_id": "6364edf0bec30683021e1374"
            },
            {
                "word": "Hawk",
                "translate": "Ястреб",
                "description": "",
                "added": "Fri Nov 04 2022 13:48:25",
                "_id": "6364edf9bec30683021e162a"
            },
            {
                "word": "Honest",
                "translate": "Честно, искренни",
                "description": "",
                "added": "Fri Nov 04 2022 13:49:08",
                "_id": "6364ee24bec30683021e18e2"
            },
            {
                "word": "However",
                "translate": "Однако, тем не менее",
                "description": "",
                "added": "Fri Nov 04 2022 13:49:25",
                "_id": "6364ee36bec30683021e1b9c"
            },
            {
                "word": "Hang",
                "translate": "Висеть, вешать, повесить",
                "description": "",
                "added": "Fri Nov 04 2022 13:50:01",
                "_id": "6364ee59bec30683021e1e58"
            },
            {
                "word": "Hide",
                "translate": "Скрывать, прятать",
                "description": "",
                "added": "Fri Nov 04 2022 13:50:26",
                "_id": "6364ee72bec30683021e2116"
            },
            {
                "word": "Hit",
                "translate": "Ударить, попасть",
                "description": "",
                "added": "Fri Nov 04 2022 13:50:44",
                "_id": "6364ee84bec30683021e23d6"
            },
            {
                "word": "Habit",
                "translate": "Привычка, обычай",
                "description": "",
                "added": "Fri Nov 04 2022 13:51:06",
                "_id": "6364ee9abec30683021e2698"
            },
            {
                "word": "Hire",
                "translate": "Нанять, нанимать",
                "description": "",
                "added": "Fri Nov 04 2022 13:51:37",
                "_id": "6364eeb9bec30683021e295c"
            },
            {
                "word": "Secret",
                "translate": "Секрет, тайна",
                "description": "",
                "added": "Fri Nov 04 2022 15:12:55",
                "_id": "636501c7bec30683021e6bc2"
            },
            {
                "word": "Success",
                "translate": "Успех, успешность, результат",
                "description": "",
                "added": "Fri Nov 04 2022 15:13:40",
                "_id": "636501f4bec30683021e6e8a"
            },
            {
                "word": "Count",
                "translate": "Считать, посчитать",
                "description": "",
                "added": "Fri Nov 04 2022 15:15:17",
                "_id": "63650255bec30683021e7154"
            },
            {
                "word": "Endless",
                "translate": "Бесконечный, нескончаемый",
                "description": "",
                "added": "Fri Nov 04 2022 15:16:15",
                "_id": "6365028fbec30683021e7420"
            },
            {
                "word": "Both",
                "translate": "Оба, обе",
                "description": "",
                "added": "Fri Nov 04 2022 15:18:43",
                "_id": "63650323bec30683021e76ee"
            },
            {
                "word": "Rare",
                "translate": "Редкий, редчайший",
                "description": "",
                "added": "Fri Nov 04 2022 15:19:04",
                "_id": "63650338bec30683021e79be"
            },
            {
                "word": "Less",
                "translate": "Меньше, реже, менее",
                "description": "",
                "added": "Fri Nov 04 2022 15:21:27",
                "_id": "636503c8bec30683021e7c91"
            },
            {
                "word": "Appaled",
                "translate": "Потрясён",
                "description": "",
                "added": "Fri Nov 04 2022 15:24:32",
                "_id": "63650480bec30683021e7f65"
            },
            {
                "word": "Keep",
                "translate": "Хранить, продолжать",
                "description": "",
                "added": "Fri Nov 04 2022 15:32:11",
                "_id": "6365064bbec30683021e823b"
            },
            {
                "word": "Day by day",
                "translate": "День за днём",
                "description": "",
                "added": "Fri Nov 04 2022 15:33:02",
                "_id": "6365067fbec30683021e8513"
            },
            {
                "word": "Broke up",
                "translate": "Расставаться",
                "description": "Расставаться с чем-то",
                "added": "Fri Nov 04 2022 18:49:52",
                "_id": "636534a0e136a899bbe599dd"
            },
            {
                "word": "Idea",
                "translate": "Идея",
                "description": "",
                "added": "Sun Nov 06 2022 22:23:14",
                "_id": "636809a2bda6de62e3facaf8"
            },
            {
                "word": "Information",
                "translate": "Информация, данные",
                "description": "",
                "added": "Sun Nov 06 2022 22:23:39",
                "_id": "636809bbbda6de62e3facdd6"
            },
            {
                "word": "Important",
                "translate": "Важный, важнейший",
                "description": "",
                "added": "Sun Nov 06 2022 22:24:41",
                "_id": "636809f9bda6de62e3fad0b6"
            },
            {
                "word": "Include",
                "translate": "Включить, включать",
                "description": "",
                "added": "Sun Nov 06 2022 22:26:08",
                "_id": "63680a50bda6de62e3fad398"
            },
            {
                "word": "Introduce",
                "translate": "Представить, вводить",
                "description": "",
                "added": "Sun Nov 06 2022 22:27:39",
                "_id": "63680aabbda6de62e3fad67c"
            },
            {
                "word": "Imagination",
                "translate": "Воображение, фантазия",
                "description": "",
                "added": "Sun Nov 06 2022 22:28:07",
                "_id": "63680ac7bda6de62e3fad962"
            },
            {
                "word": "Too",
                "translate": "Тоже, слишком",
                "description": "",
                "added": "Sun Nov 06 2022 22:31:39",
                "_id": "63680b9bbda6de62e3faddbd"
            },
            {
                "word": "Bother",
                "translate": "Беспокоиться, беспокоить",
                "description": "",
                "added": "Tue Nov 08 2022 16:48:13",
                "_id": "636a5e1dc1b266a0344d20f6"
            },
            {
                "word": "Until",
                "translate": "До, пока",
                "description": "",
                "added": "Tue Nov 08 2022 16:49:20",
                "_id": "636a5e60c1b266a0344d226d"
            },
            {
                "word": "Last",
                "translate": "Последний, прошлый",
                "description": "",
                "added": "Tue Nov 08 2022 16:49:40",
                "_id": "636a5e74c1b266a0344d23e5"
            },
            {
                "word": "Company",
                "translate": "Компания, фирма",
                "description": "",
                "added": "Tue Nov 08 2022 16:51:20",
                "_id": "636a5ed8c1b266a0344d3116"
            },
            {
                "word": "Most",
                "translate": "Более, наиболее, большинство",
                "description": "",
                "added": "Tue Nov 08 2022 16:52:41",
                "_id": "636a5f2ac1b266a0344d3290"
            },
            {
                "word": "Other",
                "translate": "Другие, прочие",
                "description": "Когда мы говорим о большом количестве",
                "added": "Tue Nov 08 2022 16:55:11",
                "_id": "636a5fbfc1b266a0344d3584"
            },
            {
                "word": "Properly",
                "translate": "Правильно, должным образом",
                "description": "",
                "added": "Tue Nov 08 2022 17:00:48",
                "_id": "636a6110c1b266a0344d4157"
            },
            {
                "word": "Real",
                "translate": "Реальный, настоящий",
                "description": "",
                "added": "Tue Nov 08 2022 17:02:08",
                "_id": "636a6160c1b266a0344d45ca"
            },
            {
                "word": "Even",
                "translate": "Даже, четное",
                "description": "",
                "added": "Tue Nov 08 2022 17:04:33",
                "_id": "636a61f1c1b266a0344d4bbc"
            },
            {
                "word": "Gradually",
                "translate": "Постепенно, понемногу",
                "description": "",
                "added": "Tue Nov 08 2022 17:07:30",
                "_id": "636a62a3c1b266a0344d4d3b"
            },
            {
                "word": "Mute",
                "translate": "Немой, глухонемой",
                "description": "",
                "added": "Tue Nov 08 2022 17:09:06",
                "_id": "636a6302c1b266a0344d51b7"
            },
            {
                "word": "Meet",
                "translate": "Встретиться, познакомиться",
                "description": "",
                "added": "Tue Nov 08 2022 17:09:41",
                "_id": "636a6325c1b266a0344d5338"
            },
            {
                "word": "Inspire",
                "translate": "Вдохновлять, внушать",
                "description": "",
                "added": "Tue Nov 08 2022 17:10:54",
                "_id": "636a636ec1b266a0344d54ba"
            },
            {
                "word": "Try",
                "translate": "Пробовать, стараться, пытаться",
                "description": "",
                "added": "Tue Nov 08 2022 17:11:55",
                "_id": "636a63acc1b266a0344d593f"
            },
            {
                "word": "Think",
                "translate": "Думать, считать",
                "description": "",
                "added": "Tue Nov 08 2022 17:12:19",
                "_id": "636a63c3c1b266a0344d5ac3"
            },
            {
                "word": "Express",
                "translate": "Выразить, выражать",
                "description": "",
                "added": "Tue Nov 08 2022 17:13:50",
                "_id": "636a641fc1b266a0344d5c48"
            },
            {
                "word": "Way",
                "translate": "Способ, путь",
                "description": "",
                "added": "Tue Nov 08 2022 17:14:19",
                "_id": "636a6445c1b266a0344d6cf6"
            },
            {
                "word": "Realize",
                "translate": "Осознать, понимать",
                "description": "",
                "added": "Tue Nov 08 2022 17:16:16",
                "_id": "636a64b0c1b266a0344d80b9"
            },
            {
                "word": "Just",
                "translate": "Только, всего, просто",
                "description": "",
                "added": "Tue Nov 08 2022 17:17:06",
                "_id": "636a64e2c1b266a0344d8241"
            },
            {
                "word": "Lately",
                "translate": "В последнее время",
                "description": "",
                "added": "Wed Nov 09 2022 13:57:52",
                "_id": "636b87b1c0fc7154751fbbcf"
            },
            {
                "word": "Curious",
                "translate": "Любопытный, любознательный",
                "description": "",
                "added": "Wed Nov 09 2022 13:58:55",
                "_id": "636b87efc0fc7154751fbd59"
            },
            {
                "word": "Seem",
                "translate": "Казаться, показаться",
                "description": "",
                "added": "Wed Nov 09 2022 14:05:11",
                "_id": "636b8967c0fc7154751fbee5"
            },
            {
                "word": "Prefer",
                "translate": "Предпочитать, отдавать предпочтение",
                "description": "",
                "added": "Wed Nov 09 2022 14:06:43",
                "_id": "636b89c3c0fc7154751fc071"
            },
            {
                "word": "Minor",
                "translate": "Незначительные, небольшие",
                "description": "",
                "added": "Wed Nov 09 2022 14:08:33",
                "_id": "636b8a31c0fc7154751fc1fe"
            },
            {
                "word": "Here you go",
                "translate": "Вот держите",
                "description": "",
                "added": "Wed Nov 09 2022 14:14:20",
                "_id": "636b8b8dc0fc7154751fc38c"
            },
            {
                "word": "Ticket",
                "translate": "Билет",
                "description": "",
                "added": "Wed Nov 09 2022 14:41:29",
                "_id": "636b91e9c0fc7154751fc51d"
            },
            {
                "word": "Pick up",
                "translate": "Забрать, подобрать, поднять",
                "description": "",
                "added": "Wed Nov 09 2022 14:44:56",
                "_id": "636b92b8c0fc7154751fc6ad"
            },
            {
                "word": "Repeat",
                "translate": "Повторять, повторить",
                "description": "",
                "added": "Wed Nov 09 2022 14:50:34",
                "_id": "636b940ac0fc7154751fcceb"
            },
            {
                "word": "Flight",
                "translate": "Полёт, рейс",
                "description": "",
                "added": "Wed Nov 09 2022 15:01:20",
                "_id": "636b9690c0fc71547520084e"
            },
            {
                "word": "Seat",
                "translate": "Место, сиденье",
                "description": "",
                "added": "Wed Nov 09 2022 15:06:41",
                "_id": "636b97d1c0fc7154752009e1"
            },
            {
                "word": "By the way",
                "translate": "Кстати, к слову",
                "description": "",
                "added": "Thu Nov 10 2022 22:44:18",
                "_id": "636d54920e5cf15315112f7d"
            },
            {
                "word": "Proud",
                "translate": "Горд, гордый",
                "description": "",
                "added": "Thu Nov 10 2022 22:45:48",
                "_id": "636d54ed0e5cf15315113112"
            },
            {
                "word": "Grass",
                "translate": "Газон, трава",
                "description": "",
                "added": "Thu Nov 10 2022 22:48:14",
                "_id": "636d557e0e5cf153151132a8"
            },
            {
                "word": "Heating",
                "translate": "Отопление, нагрев",
                "description": "",
                "added": "Thu Nov 10 2022 22:49:57",
                "_id": "636d55e50e5cf1531511343f"
            },
            {
                "word": "Eventually",
                "translate": "В конце концов, в итоге",
                "description": "",
                "added": "Thu Nov 10 2022 22:50:41",
                "_id": "636d56110e5cf153151135d7"
            },
            {
                "word": "Thinking",
                "translate": "Мышление, размышление",
                "description": "",
                "added": "Thu Nov 10 2022 22:51:49",
                "_id": "636d56550e5cf15315113770"
            },
            {
                "word": "I used",
                "translate": "Я раньше",
                "description": "",
                "added": "Thu Nov 10 2022 22:55:32",
                "_id": "636d57340e5cf1531511390a"
            },
            {
                "word": "I'm used",
                "translate": "Я привык",
                "description": "",
                "added": "Thu Nov 10 2022 22:56:28",
                "_id": "636d576c0e5cf15315113aa5"
            },
            {
                "word": "Take advantage of",
                "translate": "Воспользоваться, используют",
                "description": "",
                "added": "Thu Nov 10 2022 22:59:53",
                "_id": "636d58390e5cf15315113ddc"
            },
            {
                "word": "Make yourself at home",
                "translate": "Чувствуй себя как дома, будь как дома",
                "description": "",
                "added": "Thu Nov 10 2022 23:01:16",
                "_id": "636d588d0e5cf15315113f7a"
            },
            {
                "word": "Suddenly",
                "translate": "Внезапно, вдруг",
                "description": "",
                "added": "Fri Nov 11 2022 18:22:59",
                "_id": "636e68d3cf34eb32154b2333"
            },
            {
                "word": "Courage",
                "translate": "Мужество, смелость",
                "description": "",
                "added": "Fri Nov 11 2022 18:26:55",
                "_id": "636e69bfcf34eb32154b24d2"
            },
            {
                "word": "Laugh",
                "translate": "Смеяться, посмеяться",
                "description": "",
                "added": "Fri Nov 11 2022 18:32:55",
                "_id": "636e6b27cf34eb32154b2672"
            },
            {
                "word": "Pay attention",
                "translate": "Обратить внимание",
                "description": "",
                "added": "Fri Nov 11 2022 18:35:43",
                "_id": "636e6bd0cf34eb32154b2813"
            },
            {
                "word": "Gift",
                "translate": "Подарок, дар",
                "description": "",
                "added": "Fri Nov 11 2022 18:37:46",
                "_id": "636e6c4bcf34eb32154b29b5"
            },
            {
                "word": "Loan",
                "translate": "Кредит",
                "description": "",
                "added": "Fri Nov 11 2022 18:42:39",
                "_id": "636e6d6fcf34eb32154b2b59"
            },
            {
                "word": "Trip",
                "translate": "Поездка, путешествие",
                "description": "",
                "added": "Fri Nov 11 2022 18:52:09",
                "_id": "636e6faacf34eb32154b3041"
            },
            {
                "word": "Relatives",
                "translate": "Родственник",
                "description": "",
                "added": "Fri Nov 11 2022 18:53:10",
                "_id": "636e6fe6cf34eb32154b352c"
            },
            {
                "word": "Explore",
                "translate": "Исследовать, изучить",
                "description": "",
                "added": "Fri Nov 11 2022 19:03:44",
                "_id": "636e7260cf34eb32154b3bbf"
            },
            {
                "word": "Actually",
                "translate": "На самом деле",
                "description": "",
                "added": "Fri Nov 11 2022 19:23:20",
                "_id": "636e76f9cf34eb32154b4256"
            },
            {
                "word": "Transition",
                "translate": "Переход, переходный период",
                "description": "",
                "added": "Fri Nov 11 2022 19:23:55",
                "_id": "636e771dcf34eb32154b43fe"
            },
            {
                "word": "Pool",
                "translate": "Бассейн",
                "description": "",
                "added": "Fri Nov 11 2022 19:25:49",
                "_id": "636e778dcf34eb32154b562d"
            },
            {
                "word": "Explain",
                "translate": "Объяснить, разъяснить",
                "description": "",
                "added": "Fri Nov 11 2022 19:26:23",
                "_id": "636e77b0cf34eb32154b57d7"
            },
            {
                "word": "Definitely",
                "translate": "Безусловно, определенно",
                "description": "",
                "added": "Fri Nov 11 2022 19:30:22",
                "_id": "636e789fcf34eb32154b5982"
            },
            {
                "word": "Right away",
                "translate": "Немедленно, сразу",
                "description": "",
                "added": "Sat Nov 12 2022 19:17:25",
                "_id": "636fc716c271e9b03aca02b4"
            },
            {
                "word": "No matter",
                "translate": "Неважно, независимо от",
                "description": "",
                "added": "Sat Nov 12 2022 19:20:46",
                "_id": "636fc7dfc271e9b03aca0462"
            },
            {
                "word": "Stuff",
                "translate": "Вещь, материал",
                "description": "",
                "added": "Sat Nov 12 2022 19:25:49",
                "_id": "636fc90dc271e9b03aca0610"
            },
            {
                "word": "Sick",
                "translate": "Больной, больничный",
                "description": "",
                "added": "Sat Nov 12 2022 23:04:14",
                "_id": "636ffc3febc7ce7e46cd7448"
            },
            {
                "word": "Get sick",
                "translate": "Заболевать, заболеть",
                "description": "",
                "added": "Sat Nov 12 2022 23:05:04",
                "_id": "636ffc70ebc7ce7e46cd77a7"
            },
            {
                "word": "Get hurt",
                "translate": "Пострадать, пораниться",
                "description": "",
                "added": "Sat Nov 12 2022 23:06:17",
                "_id": "636ffcb9ebc7ce7e46cd7958"
            },
            {
                "word": "Hurt",
                "translate": "Болеть, навредить",
                "description": "",
                "added": "Sat Nov 12 2022 23:07:09",
                "_id": "636ffceeebc7ce7e46cd7b0a"
            },
            {
                "word": "Average",
                "translate": "Средний, среднестатистический",
                "description": "",
                "added": "Tue Nov 15 2022 15:55:15",
                "_id": "63738c3434afb21f601ef1aa"
            },
            {
                "word": "Truly",
                "translate": "По-настоящему, поистине",
                "description": "",
                "added": "Tue Nov 15 2022 16:04:28",
                "_id": "63738e5d34afb21f601ef35f"
            },
            {
                "word": "Prevent",
                "translate": "Предотвратить, предотвращать",
                "description": "",
                "added": "Tue Nov 15 2022 16:35:32",
                "_id": "637395a534afb21f601ef515"
            },
            {
                "word": "Devote",
                "translate": "Посветить, уделять",
                "description": "",
                "added": "Tue Nov 15 2022 20:20:45",
                "_id": "6373ca6e34afb21f602056b0"
            },
            {
                "word": "Distract",
                "translate": "Отвлечь, отвлекаться",
                "description": "",
                "added": "Tue Nov 15 2022 20:28:29",
                "_id": "6373cc3e34afb21f60205867"
            },
            {
                "word": "Result",
                "translate": "Результат, итог",
                "description": "",
                "added": "Tue Nov 15 2022 22:55:44",
                "_id": "6373eec00fba46d33e2164c3"
            },
            {
                "word": "Key",
                "translate": "Ключ, ключевой, основной",
                "description": "",
                "added": "Wed Nov 16 2022 14:52:16",
                "_id": "6374cef044d0dd116219eadf"
            },
            {
                "word": "Maintain",
                "translate": "Поддерживать, сохранять",
                "description": "Когда мы поддерживаем вес",
                "added": "Wed Nov 16 2022 14:56:01",
                "_id": "6374cfd144d0dd11621a013e"
            },
            {
                "word": "Although",
                "translate": "Хотя",
                "description": "",
                "added": "Wed Nov 16 2022 15:02:06",
                "_id": "6374d13e44d0dd11621a02fa"
            },
            {
                "word": "Diet",
                "translate": "Диета, рацион",
                "description": "",
                "added": "Wed Nov 16 2022 15:03:02",
                "_id": "6374d17644d0dd11621a04b6"
            },
            {
                "word": "Mean",
                "translate": "Означать, значить, подразумевать",
                "description": "",
                "added": "Wed Nov 16 2022 15:03:42",
                "_id": "6374d19e44d0dd11621a0673"
            },
            {
                "word": "Produce",
                "translate": "Производить, вырабатывать",
                "description": "",
                "added": "Wed Nov 16 2022 15:05:10",
                "_id": "6374d1f644d0dd11621a0f21"
            },
            {
                "word": "Likely",
                "translate": "Вероятно, возможно",
                "description": "",
                "added": "Wed Nov 16 2022 15:10:08",
                "_id": "6374d32044d0dd11621a10e0"
            },
            {
                "word": "Impression",
                "translate": "Впечатление, представление",
                "description": "",
                "added": "Wed Nov 16 2022 23:51:44",
                "_id": "63754d60a09cc54af089df75"
            },
            {
                "word": "Film",
                "translate": "Фильм, снимать",
                "description": "",
                "added": "Wed Nov 16 2022 23:54:30",
                "_id": "63754e07a09cc54af089e136"
            },
            {
                "word": "Stick to",
                "translate": "Придерживаться",
                "description": "",
                "added": "Fri Nov 18 2022 22:24:54",
                "_id": "6377dc06ade763dc9ee27f7f"
            },
            {
                "word": "Get wet",
                "translate": "Промокнуть, намокнуть",
                "description": "",
                "added": "Fri Nov 18 2022 22:25:52",
                "_id": "6377dc40ade763dc9ee28685"
            },
            {
                "word": "Subject",
                "translate": "Предмет, тема",
                "description": "",
                "added": "Fri Nov 18 2022 22:27:34",
                "_id": "6377dca6ade763dc9ee28bcd"
            },
            {
                "word": "Get out",
                "translate": "Выйти, уходить",
                "description": "",
                "added": "Fri Nov 18 2022 22:28:32",
                "_id": "6377dce0ade763dc9ee28f55"
            },
            {
                "word": "Mainly",
                "translate": "В основном, преимущественно",
                "description": "",
                "added": "Fri Nov 18 2022 22:56:00",
                "_id": "6377e350ade763dc9ee2911c"
            },
            {
                "word": "How long/how much/how many",
                "translate": "Через сколько",
                "description": "Употребляются с исчисляемыми или нет",
                "added": "Fri Nov 18 2022 23:01:29",
                "_id": "6377e499ade763dc9ee292e4"
            },
            {
                "word": "Long ago",
                "translate": "Давно",
                "description": "",
                "added": "Fri Nov 18 2022 23:09:44",
                "_id": "6377e689ade763dc9ee294ac"
            },
            {
                "word": "A long time ago",
                "translate": "Давным-давно, очень давно",
                "description": "",
                "added": "Fri Nov 18 2022 23:11:28",
                "_id": "6377e6f0ade763dc9ee29675"
            },
            {
                "word": "Wish",
                "translate": "Желать, пожелать",
                "description": "",
                "added": "Sun Nov 20 2022 21:40:07",
                "_id": "637a748734ee6d840fdbd1c4"
            },
            {
                "word": "Regret",
                "translate": "Жалеть, сожаление",
                "description": "",
                "added": "Sun Nov 20 2022 21:43:40",
                "_id": "637a755c34ee6d840fdbfad5"
            },
            {
                "word": "Conversation",
                "translate": "Разговор, беседа",
                "description": "",
                "added": "Sun Nov 20 2022 21:49:25",
                "_id": "637a76b534ee6d840fdbfca1"
            },
            {
                "word": "Correct",
                "translate": "Исправлять, правильный, корректный",
                "description": "",
                "added": "Sun Nov 20 2022 21:50:29",
                "_id": "637a76f634ee6d840fdc0039"
            },
            {
                "word": "Strive",
                "translate": "Стремиться, добавиться",
                "description": "",
                "added": "Sun Nov 20 2022 22:12:55",
                "_id": "637a7c3734ee6d840fdc03d4"
            },
            {
                "word": "Get rid of",
                "translate": "Избавиться от",
                "description": "",
                "added": "Sun Nov 20 2022 22:20:25",
                "_id": "637a7df934ee6d840fdc0771"
            },
            {
                "word": "Language",
                "translate": "Язык",
                "description": "",
                "added": "Tue Nov 22 2022 12:26:15",
                "_id": "637c95b7be4073d34bc952ba"
            },
            {
                "word": "Know",
                "translate": "Знать, узнать",
                "description": "",
                "added": "Tue Nov 22 2022 12:26:56",
                "_id": "637c95e0be4073d34bc95829"
            },
            {
                "word": "Very",
                "translate": "Очень, весьма",
                "description": "",
                "added": "Tue Nov 22 2022 12:28:02",
                "_id": "637c9622be4073d34bc95bcb"
            },
            {
                "word": "Well",
                "translate": "Хорошо, ну",
                "description": "",
                "added": "Tue Nov 22 2022 12:28:14",
                "_id": "637c962ebe4073d34bc95d9e"
            },
            {
                "word": "Study",
                "translate": "Учиться, изучение, исследование",
                "description": "",
                "added": "Tue Nov 22 2022 12:29:03",
                "_id": "637c965fbe4073d34bc95f72"
            },
            {
                "word": "Work",
                "translate": "Работа, работать, деятельность",
                "description": "",
                "added": "Tue Nov 22 2022 12:29:58",
                "_id": "637c9697be4073d34bc9631b"
            },
            {
                "word": "Like",
                "translate": "Нравиться, любить, как, как бы",
                "description": "",
                "added": "Tue Nov 22 2022 12:31:06",
                "_id": "637c96dabe4073d34bc96899"
            },
            {
                "word": "Live",
                "translate": "Жить, проживать",
                "description": "",
                "added": "Tue Nov 22 2022 12:32:03",
                "_id": "637c9713be4073d34bc96a70"
            },
            {
                "word": "Understand",
                "translate": "Понимать, понять",
                "description": "",
                "added": "Tue Nov 22 2022 12:34:15",
                "_id": "637c9797be4073d34bc971ca"
            },
            {
                "word": "Tip",
                "translate": "Совет",
                "description": "",
                "added": "Tue Nov 22 2022 15:52:38",
                "_id": "637cc616be4073d34bc97eb3"
            },
            {
                "word": "Pronounce",
                "translate": "Произносить, произнести",
                "description": "",
                "added": "Tue Nov 22 2022 15:56:55",
                "_id": "637cc718be4073d34bc9808d"
            },
            {
                "word": "Insurance",
                "translate": "Страховка, страхование",
                "description": "",
                "added": "Tue Nov 22 2022 16:15:54",
                "_id": "637ccb8abe4073d34bc98269"
            },
            {
                "word": "Cover",
                "translate": "Охватывать, покрывать",
                "description": "",
                "added": "Tue Nov 22 2022 16:16:28",
                "_id": "637ccbacbe4073d34bc98445"
            },
            {
                "word": "Learn",
                "translate": "Научиться, изучать",
                "description": "",
                "added": "Wed Nov 23 2022 15:13:53",
                "_id": "637e0e8123a4884ed7d1fb55"
            },
            {
                "word": "See",
                "translate": "Видеть, увидеть",
                "description": "",
                "added": "Wed Nov 23 2022 15:15:08",
                "_id": "637e0ecc23a4884ed7d202c7"
            },
            {
                "word": "Want",
                "translate": "Хотеть, желать",
                "description": "",
                "added": "Wed Nov 23 2022 15:23:49",
                "_id": "637e10d523a4884ed7d20c1b"
            },
            {
                "word": "Lesson",
                "translate": "Урок, занятие",
                "description": "",
                "added": "Wed Nov 23 2022 15:36:25",
                "_id": "637e13c923a4884ed7d211b7"
            },
            {
                "word": "Friend",
                "translate": "Друг",
                "description": "",
                "added": "Wed Nov 23 2022 15:38:48",
                "_id": "637e145823a4884ed7d21cf3"
            },
            {
                "word": "Place",
                "translate": "Место",
                "description": "",
                "added": "Wed Nov 23 2022 15:41:01",
                "_id": "637e14dd23a4884ed7d22836"
            },
            {
                "word": "Really",
                "translate": "Действительно, очень",
                "description": "",
                "added": "Wed Nov 23 2022 15:43:41",
                "_id": "637e157d23a4884ed7d2319d"
            },
            {
                "word": "Sometimes",
                "translate": "Иногда, порой",
                "description": "",
                "added": "Wed Nov 23 2022 15:48:58",
                "_id": "637e16ba23a4884ed7d23ceb"
            },
            {
                "word": "Here",
                "translate": "Здесь, сюда",
                "description": "",
                "added": "Wed Nov 23 2022 15:51:21",
                "_id": "637e174a23a4884ed7d2593a"
            },
            {
                "word": "There",
                "translate": "Там, туда",
                "description": "",
                "added": "Wed Nov 23 2022 15:51:34",
                "_id": "637e175623a4884ed7d25b20"
            },
            {
                "word": "Often",
                "translate": "Часто, зачастую",
                "description": "",
                "added": "Fri Nov 25 2022 13:33:48",
                "_id": "63809a0c63575d7832a1cd07"
            },
            {
                "word": "Usually",
                "translate": "Обычно, как правило",
                "description": "",
                "added": "Fri Nov 25 2022 13:34:02",
                "_id": "63809a1b63575d7832a1ceef"
            },
            {
                "word": "Then",
                "translate": "Затем, тогда",
                "description": "",
                "added": "Fri Nov 25 2022 13:49:28",
                "_id": "63809db863575d7832a1d4a7"
            },
            {
                "word": "Gratitude",
                "translate": "Благодарность, признательность",
                "description": "",
                "added": "Tue Nov 29 2022 15:47:29",
                "_id": "6385ff6179e092f4a2a3e240"
            },
            {
                "word": "Let's say",
                "translate": "Допустим",
                "description": "",
                "added": "Tue Nov 29 2022 15:57:04",
                "_id": "638601a079e092f4a2a3ebcf"
            },
            {
                "word": "Travel",
                "translate": "Путешествие, поездка",
                "description": "",
                "added": "Wed Nov 30 2022 12:14:12",
                "_id": "63871ee4b2273c7c01330534"
            },
            {
                "word": "Song",
                "translate": "Песня",
                "description": "",
                "added": "Wed Nov 30 2022 12:34:12",
                "_id": "63872394b2273c7c013310bf"
            },
            {
                "word": "More",
                "translate": "Более, больше",
                "description": "",
                "added": "Wed Nov 30 2022 12:40:12",
                "_id": "638724fdb2273c7c0133149c"
            },

    ]
    return {words,totalWords:15}
}

export const TestWords = () => {
    const [find, setFind] = useState<string>('')
    const COUNT_WORDS = 15
    const [current, setCurrent] = useState<number>(1)
    const dispatch = useAppDispatch()
    // @ts-ignore
    const {words, totalWords} = returnWords()
    useEffect(() => {
        dispatch(fetchGetWords(current))
    }, [current])
    const resultPagination = Math.ceil(totalWords / COUNT_WORDS)
    const arr: Array<number> = []
    const [timeOut, setTimeOutT] = useState<ReturnType<typeof setTimeout>>()
    const handlerFindWord = (e: ChangeEvent<HTMLInputElement>) => {
        setFind(e.target.value)
        clearTimeout(timeOut)
        if (!e.target.value) {
            dispatch(fetchGetWords(current))
            return
        }
        setTimeOutT(
            setTimeout(() => {
                dispatch(fetchWordFind(e.target.value))
            }, 500),
        )
    }
    const returnArrayPagination = () => {
        const right = () => {
            const result = resultPagination - (current + 2)
            if (result < 0) return resultPagination
            return resultPagination - result
        }
        const left = () => {
            if (current - 1 <= 0) return 0
            if (current - 1 >= 2) return 2
            else return 1
        }
        for (let i = current - left(); i <= right(); i++) {
            arr.push(i)
        }
    }
    returnArrayPagination()
    const [sortElements, setSortElements] = useState<Array<{ id: number; name: string; isActive: boolean; sort: SortChoice }>>([
        {id: 2, name: 'Description', isActive: false, sort: 'DESCRIPTION'},
        {id: 3, name: 'Added', isActive: false, sort: 'ADDED'},
    ])
    const [isModal, setIsModal] = useState<boolean>(false)
    const handlerIsModal = (value: boolean) => setIsModal(value)
    const handlerCurrentPagination = (value: number) => setCurrent(value)
    const handlerButtonNext = () => {
        if (current >= resultPagination) return
        setCurrent((state) => state + 1)
    }
    const handlerButtonPrevious = () => {
        if (current === 1) return
        else setCurrent((state) => state - 1)
    }
    const showing = () => {
        const total = totalWords - current * COUNT_WORDS
        if (total > 0) return current * COUNT_WORDS
        else return current * COUNT_WORDS - Math.abs(total)
    }
    const handlerSortReset = () => {
        setSortElements(sortElements.map((item) => ({...item, isActive: false})))
        dispatch(fetchGetWords(current))
    }
    const handlerSort = (name: string, typeSort: SortChoice) => {
        setSortElements(
            sortElements.map((item) =>
                item.name === name
                    ? {...item, isActive: !item.isActive}
                    : {
                        ...item,
                        isActive: false,
                    },
            ),
        )
        // @ts-ignore
        dispatch(fetchAddedWords(typeSort))
    }
    return (
        <div className='container_words' style={{background:'black',margin: '0px 0px',width:'100%'}}>
            {isModal && <WordModal handlerIsModal={() => handlerIsModal(false)}/>}
            <div className='container_words_description'>
                <div className='container_words_description_one'>
                    <h1>Words Management</h1>
                    <p>
                        Here, you can manage your words and phrases, update, delete, correct. Add everything you
                        know!
                    </p>
                </div>
                <div className='container_words_description_two'>
                    <button onClick={() => handlerIsModal(true)}>+ Add new word</button>
                    <div>
                        <img src='https://cdn-icons-png.flaticon.com/512/7884/7884209.png' alt=''/>
                        <input
                            value={find}
                            onChange={handlerFindWord}
                            type='text'
                            placeholder='Search by any words'
                        />
                    </div>
                </div>
            </div>
            <div className='container_words_sort'>
                <div className='container_words_sort_buttons'>
                    {sortElements.map((item) => (
                        <SortElement
                            sortElem={() => handlerSort(item.name, item.sort)}
                            key={item.id}
                            {...item}
                        />
                    ))}
                    <button onClick={handlerSortReset}>Reset</button>
                </div>
                <div className={'container_words_word'}>
                    <div className={'container_words_word_item'} style={{width:'99.5%'}}>
                        {words.map((item: WordType) => (
                            <Word
                                id={item._id || ''}
                                key={item._id}
                                {...item}
                                deleteWord={() =>
                                    dispatch(fetchDeleteWord({id: item._id || '', word: item.word}))
                                }
                            />
                        ))}
                    </div>
                    <div className='container_words_pagination'>
                        <div className='container_words_pagination_showing'>
                            Showing {find.length >= 1 ? words.length : showing()} words of{' '}
                            {find.length >= 1 ? words.length : totalWords} Results
                        </div>
                        <div>
                            <button onClick={handlerButtonPrevious}>&#171;</button>
                            <div>
                                {current > 3 && <p onClick={() => setCurrent(1)}>1...</p>}
                                {arr.length >= 1 &&
                                    arr.map((item) => (
                                        <Pagination
                                            key={item}
                                            click={() => handlerCurrentPagination(item)}
                                            isActive={item === current}
                                            id={item}
                                        />
                                    ))}
                                <p onClick={() => handlerCurrentPagination(resultPagination)}>
                                    ... {arr.length > 1 && resultPagination}
                                </p>
                            </div>
                            <button onClick={handlerButtonNext}>&#187;</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}