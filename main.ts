import Visitor from '@swc/core/Visitor'
import { BinaryExpression, Expression } from '@swc/core'

export class HedgeHogPlugin extends Visitor {
  visitBinaryExpression (expression: BinaryExpression): Expression {
    // todo
    return expression
  }
}
