import { Injectable } from "@angular/core";


@Injectable({ providedIn: "root" })
export class GreeterService {

    public sayGreet() {
        return "Hello!!!"
    }

}