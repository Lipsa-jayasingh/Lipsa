class Bank
{
    constructor(name,phno,aadhar,bal,pin)
    {
        this.name=name
        this.phno=phno
        this.aadhar=aadhar
        this.bal=bal
        this.pin=pin
    }
    display()
    {
        var p= Number(prompt("enter your pin :"))
        if (this.pin==p)
        {
            alert("your name is "+this.name +"your balance is"+this.bal)
        }
        else
        {
            alert("incorrect pin")
        }
    }
    deposite()
    {
        var p = Number(prompt("enter your pin :"))
        if(this.pin==p)
        {
            var a=Number(prompt("enter your amount to deposite :"))
            alert("your previous balance is"+this.bal)
            this.bal=this.bal+a
            alert("your current balance is"+this.bal)
        }
        else
        {
            alert("incorrect pin")
        }
    }
    withdraw()
    {
        var p = Number(prompt("enter your pin :"))
        if(this.pin==p)
        {
        var a=Number(prompt("enter your amount to withdraw :"))
            if(a<=this.bal)
            {
            alert("your previous balance is"+this.bal)
            this.bal=this.bal-a
            alert("your current balance is"+this.bal)
            }
            else
            {
            alert("insufficient balance")
            }
            alert("your previous balance is"+this.bal)
            this.bal=this.bal-a
            alert("your current balance is"+this.bal)
        }
        else
        {
            alert("incorrect pin")
        }
    }
}
alert("Welcome to my Bank")
var n=prompt("enter your name :")
var ph=Number(prompt("enter your phno :"))
var ad=Number(prompt("enter your aadhar:"))
var b=Number(prompt("enter your bal:"))
var p=Number(prompt("enter your pin:"))

    let obj=new Bank(n,ph,ad,b,p)
    var k=Number(prompt("enter your choice 1 for Inquiry , 2 for Deposite , 3 for Withdraw"))
    if(k==1)
    {
        obj.display()
    }
    else if(k==2)
    {
        obj.deposite()
    }
    else if(k==3)
    {
        obj.withdraw()
    }
    else
    {
        alert("invalid input")
    }
