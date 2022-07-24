interface Student {
    readonly name: string;
    surname: string;
    readonly id: number;
    course: number;
    adress: {
      city?: string;
      street: string;
    }
}

function getDate(timestamp:number):Date {
    return new Date(timestamp);
}

