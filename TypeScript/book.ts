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
    public getTitle (){
        return this.title;
    }
    public setTitle (newTitle:string){
        return this.title = newTitle;
    }
    public getNpages (){
        return this.npages;
    }
    public setNpages (newNpages:number){
        return this.npages = newNpages;
    }
    public getIsbn (){
        return this.isbn;
    }
    public setIsbn (newIsbn:string){
        return this.isbn = newIsbn;
    }
    public getAuthor (){
        return this.author;
    }
    public setAuthor (newAuthor:string){
        return this.author = newAuthor;
    }
    public getEditorial (){
        return this.editorial;
    }
    public setEditorial (newEditorial:string){
        return this.editorial = newEditorial;
    }
    public toString(): string {
        
        return `${"\n"}Title - ${this.title},${"\n"}Number of Pages - ${this.npages},${"\n"}ISBN - ${this.isbn},${"\n"}Author - ${this.author},${"\n"}Editorial - ${this.editorial}.`
    }
}