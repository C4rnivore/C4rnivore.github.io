export interface ScheduleItem {
    lesson: number;
    title: string;
    subtitle?:string;
    week?: "odd" | "even" | "all";
    auditory?: string;
}
export type Day = "Понедельник" | "Вторник" | "Среда" | "Четверг" | "Пятница" | "Суббота";

export const schedule: { [key in Day]: ScheduleItem[] } = {
    "Понедельник": [
        {
            lesson: 1,
            title: "Физра",
            week: "all",
        },
        {
            lesson: 2,
            title: "Сохранение биоразнообразия",
            week: "all",
        },  
        {
            lesson: 3,
            title: "Биология клетки",
            subtitle: "[Лекция]",
            week: "all",
        },
    ],
    "Вторник": [
        {
            lesson: 1,
            title: "Почвоведение",
            subtitle: "[Лекция]",
            week: "all",
        },
        {
            lesson: 2,
            title: "Генетика",
            subtitle: "[Лекция]",
            week: "all",
        }, 
    ],
    "Среда": [
        {
            lesson: 1,
            title: "Физиология человека и животных",
            subtitle: "[Лекция - четные недели]",
            week: "odd",
        },
        {
            lesson: 2,
            title: "Физиология человека и животных",
            subtitle: "[Лекция]",
            week: "all",
        }, 
        {
            lesson: 3,
            title: "Общая генетика",
            subtitle: "[Практика - Команда 3 - нечетные недели]",
            week: "even",
        },
        {
            lesson: 3,
            title: "Биология клетки",
            subtitle: "[Практика - Команда 2 - четные недели]",
            week: "odd",
        }, 
        {
            lesson: 4,
            title: "Физиология человека и животных до 18:05",
            subtitle: "[Лабораторная - Команда 4]",
            week: "all",
        },
        {
            lesson: 5,
            title: "Программирование",
            subtitle: "18:40 - 20:15",
            week: "odd",
        }, 
    ],
    "Четверг": [
        {
            lesson: 2,
            title: "Микробиология",
            subtitle: "[Команда 3]",
            week: "all",
        },
        {
            lesson: 3,
            title: "Палеонтология",
            week: "all",
        }, 
    ],
    "Пятница": [],
    "Суббота": [        {
        lesson: 1,
        title: "Микробиология",
        subtitle: "[Команда 3]",
        week: "all",
    },
    {
        lesson: 5,
        title: "Физра",
        subtitle: "16:00 – 17:00",
        week: "all",
    }, ],
}
