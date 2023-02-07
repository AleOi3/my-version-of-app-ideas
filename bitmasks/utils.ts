type IOperator  = "and" | "or" | "xor";

export class Operator {
    static operate(left: boolean, operator: IOperator, right: boolean,): boolean {
        switch (operator) {
            case 'and':
                return left && right; 
            case 'xor':
                if(left == true && right == true)   return true; 
                if(left == false && right == false) return true;
                if(left == true && right == false)  return false;
                if(left == false && right == true)  return false;
            case 'or':
                return left || right; 
        }
    }
}