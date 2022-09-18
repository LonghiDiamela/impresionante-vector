import "./styles.css";

const cells=document.getElementsByTagName("td");

const vector:number[][]=new Array(3);
vector[0]=new Array(4);
vector[1]=new Array(4);
vector[2]=new Array(4);

function resetMax(): void {
  for (let i:number=0; i<cells.length; i++){
    if (cells[i].classList.contains("max")) cells[i].classList.remove("max");
  }
}

function findMax(): void{
  let cellIndex:number=0;
  let cellMax:number=0;
  let maxNum:number=0;
  for(let i:number=0; i<vector.length; i++){
    for (let j:number=0; j<vector[i].length; j++){
      if (vector[i][j]>maxNum){
        maxNum=vector[i][j];
        cellMax=cellIndex;
      }
      console.table({cellIndex, cellMax});
      cellIndex++;
    }
  }
  cells[cellMax].classList.add("max");
}

function fillVector(): void{
  resetMax();
  let cellIndex:number=0;
  for (let i:number=0; i<vector.length; i++) {
    for (let j:number=0; j<vector[i].length; j++) {
      vector[i][j]=Math.round(Math.random()*101);
      cells[cellIndex].innerText=vector[i][j].toString();
      cellIndex++;
    }
  }
}

const btnFill=document.getElementById("btnFill") as HTMLButtonElement;
btnFill?.addEventListener("click",fillVector);
const btnFind=document.getElementById("btnFind") as HTMLButtonElement;
btnFind?.addEventListener("click",findMax);
