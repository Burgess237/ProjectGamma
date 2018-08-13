export class DataService {

    // declare variables
    First: number;
    Second: number;
    Answer: number;

    // methods to call their values
    getFirst() {return this.First; }
    getSecond() { return this.Second; }
    getAnswer() { return this.Answer; }

    // methods to set their valeus
    setFirst( Setnumber: number ) {
         this.First = Setnumber; }
    setSecond( number: number) {
         this.Second = number; }
    setAnswer( number: number) {
         this.Answer = number; }
}
