import {Book} from "./book";
export class Library {
    //ATRIBUTOS
    private books: Book[];
    private address: string;
    private manager: string;
    //CONSTRUCTOR
    constructor (books:Book[], address: string, manager: string) {
        this.books = books;
        this.address = address;
        this.manager = manager;
    }
    //METODOS
    public getBooks(): Book[] {
        return this.books;
    }
    public setBooks(NewBook: Book[]){
        this.books = NewBook;
    }
    public getAddress(): string{
        return this.address;
    }
    public setAddress(NewAddress: string){
        this.address = NewAddress;
    }
    public getManager(): string{
        return this.manager;
    }
    public setManager(NewManager: string){
        this.manager = NewManager;
    }
    public toString(): string{
        let nLibro:string = "";
        for (let i = 0; i < this.books.length; i++){
            nLibro = nLibro + "\n" +  "Book" + [i+1] +  ":\n" + this.books[i].toString() + "\n";
        }
        return nLibro
        // return `${nLibro}:${"\n"}${this.books.toString()}`
    }
    public getNumberOfBooks(): number{
        return this.books.length;
    }
 public findByAuthor (author: string): Book[]{
    let SameAuthor: Book[] = [];
        for (let i = 0; i < this.books.length; i++){
            if (this.books[i].getAuthor() == author){
                SameAuthor.push(this.books[i]);
            }
        }
        return SameAuthor
  }
}
