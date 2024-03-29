export class Bot {
    Id: number;
    Name: string;
    IsActive: boolean;

    constructor(id: number, name: string, isActive: boolean) {
        this.Id = id;
        this.Name = name;
        this.IsActive = isActive;
    }
}