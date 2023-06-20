class Calculator{
    protected panelContents:string="";
    pressButton(b:string):void{
        if(b=="C"){this.panelContents=""}
        else{this.panelContents+=b;}
    }
    getPanelContents():string{
        if(this.panelContents.length>0){
            return this.panelContents;
        }
        return "0";
    }
}

export{
    Calculator
}