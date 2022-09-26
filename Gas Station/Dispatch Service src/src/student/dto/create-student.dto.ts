import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
export class CreateStudentDto {
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
     name: string;
    @IsNumber()
    @IsNotEmpty()
     roleNumber: number;
    
    @IsNumber()
   
     class: number;
    @IsString()
    @MaxLength(30)
    @IsNotEmpty()
    gender: string;
    @IsNumber()
    @IsNotEmpty()
     marks: number;

    setName(name:string){
        this.name=name;
    }
    setRoleNumber(x:number){
        this.roleNumber=x;
    }
    setClass(y:number){
        this.class=y;
    }
    setGender(gender:string){
        this.gender=gender;
    }
    setmarks(marks:number){
        this.marks=marks;
    }
}