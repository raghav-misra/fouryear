interface ISchool {
    id: string;
    name: string;
    website: string;
}

interface ICredit {
    id: string;
    type: "course" | "exam";
    name: string;
    score: string;
}