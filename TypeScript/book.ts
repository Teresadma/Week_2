export class Book {
    //ATRIBUTOS
    private title: string;
    private npages: number;
    private isbn: string;
    private author: string;
    private editorial: string;
    //CONSTRUCTOR
    constructor (title:string, npages:number, isbn:string, author:string, editorial:string){
        this.title = title;
        this.npages = npages;
        this.isbn = isbn;
        this.author = author;
        this.editorial = editorial;
    }
    //METODOS
    public getTitle (): string{
        return this.title;
    }
    public setTitle (newTitle:string){
        this.title = newTitle;
    }
    public getNpages (): number{
        return this.npages;
    }
    public setNpages (newNpages:number){
        this.npages = newNpages;
    }
    public getIsbn (): string{
        return this.isbn;
    }
    public setIsbn (newIsbn:string){
        this.isbn = newIsbn;
    }
    public getAuthor (): string{
        return this.author;
    }
    public setAuthor (newAuthor:string){
        this.author = newAuthor;
    }
    public getEditorial (): string{
        return this.editorial;
    }
    public setEditorial (newEditorial:string){
        this.editorial = newEditorial;
    }
    public toString(): string {
        
        return `${"\n"}Title - ${this.title},${"\n"}Number of Pages - ${this.npages},${"\n"}ISBN - ${this.isbn},${"\n"}Author - ${this.author},${"\n"}Editorial - ${this.editorial}.`
    }
}