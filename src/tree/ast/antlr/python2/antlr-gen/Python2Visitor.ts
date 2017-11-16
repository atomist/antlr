// Generated from src/tree/ast/antlr/python2/Python2.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { Single_inputContext } from './Python2Parser';
import { File_inputContext } from './Python2Parser';
import { Eval_inputContext } from './Python2Parser';
import { DecoratorContext } from './Python2Parser';
import { DecoratorsContext } from './Python2Parser';
import { DecoratedContext } from './Python2Parser';
import { FuncdefContext } from './Python2Parser';
import { ParametersContext } from './Python2Parser';
import { VarargslistContext } from './Python2Parser';
import { FpdefContext } from './Python2Parser';
import { FplistContext } from './Python2Parser';
import { StmtContext } from './Python2Parser';
import { Simple_stmtContext } from './Python2Parser';
import { Small_stmtContext } from './Python2Parser';
import { Expr_stmtContext } from './Python2Parser';
import { AugassignContext } from './Python2Parser';
import { Print_stmtContext } from './Python2Parser';
import { Del_stmtContext } from './Python2Parser';
import { Pass_stmtContext } from './Python2Parser';
import { Flow_stmtContext } from './Python2Parser';
import { Break_stmtContext } from './Python2Parser';
import { Continue_stmtContext } from './Python2Parser';
import { Return_stmtContext } from './Python2Parser';
import { Yield_stmtContext } from './Python2Parser';
import { Raise_stmtContext } from './Python2Parser';
import { Import_stmtContext } from './Python2Parser';
import { Import_nameContext } from './Python2Parser';
import { Import_fromContext } from './Python2Parser';
import { Import_as_nameContext } from './Python2Parser';
import { Dotted_as_nameContext } from './Python2Parser';
import { Import_as_namesContext } from './Python2Parser';
import { Dotted_as_namesContext } from './Python2Parser';
import { Dotted_nameContext } from './Python2Parser';
import { Global_stmtContext } from './Python2Parser';
import { Exec_stmtContext } from './Python2Parser';
import { Assert_stmtContext } from './Python2Parser';
import { Compound_stmtContext } from './Python2Parser';
import { If_stmtContext } from './Python2Parser';
import { While_stmtContext } from './Python2Parser';
import { For_stmtContext } from './Python2Parser';
import { Try_stmtContext } from './Python2Parser';
import { With_stmtContext } from './Python2Parser';
import { With_itemContext } from './Python2Parser';
import { Except_clauseContext } from './Python2Parser';
import { SuiteContext } from './Python2Parser';
import { Testlist_safeContext } from './Python2Parser';
import { Old_testContext } from './Python2Parser';
import { Old_lambdefContext } from './Python2Parser';
import { TestContext } from './Python2Parser';
import { Or_testContext } from './Python2Parser';
import { And_testContext } from './Python2Parser';
import { Not_testContext } from './Python2Parser';
import { ComparisonContext } from './Python2Parser';
import { Comp_opContext } from './Python2Parser';
import { ExprContext } from './Python2Parser';
import { Xor_exprContext } from './Python2Parser';
import { And_exprContext } from './Python2Parser';
import { Shift_exprContext } from './Python2Parser';
import { Arith_exprContext } from './Python2Parser';
import { TermContext } from './Python2Parser';
import { FactorContext } from './Python2Parser';
import { PowerContext } from './Python2Parser';
import { AtomContext } from './Python2Parser';
import { ListmakerContext } from './Python2Parser';
import { Testlist_compContext } from './Python2Parser';
import { LambdefContext } from './Python2Parser';
import { TrailerContext } from './Python2Parser';
import { SubscriptlistContext } from './Python2Parser';
import { SubscriptContext } from './Python2Parser';
import { SliceopContext } from './Python2Parser';
import { ExprlistContext } from './Python2Parser';
import { TestlistContext } from './Python2Parser';
import { DictorsetmakerContext } from './Python2Parser';
import { ClassdefContext } from './Python2Parser';
import { ArglistContext } from './Python2Parser';
import { ArgumentContext } from './Python2Parser';
import { List_iterContext } from './Python2Parser';
import { List_forContext } from './Python2Parser';
import { List_ifContext } from './Python2Parser';
import { Comp_iterContext } from './Python2Parser';
import { Comp_forContext } from './Python2Parser';
import { Comp_ifContext } from './Python2Parser';
import { Testlist1Context } from './Python2Parser';
import { Encoding_declContext } from './Python2Parser';
import { Yield_exprContext } from './Python2Parser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Python2Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Python2Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `Python2Parser.single_input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingle_input?: (ctx: Single_inputContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.file_input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFile_input?: (ctx: File_inputContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.eval_input`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEval_input?: (ctx: Eval_inputContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.decorator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecorator?: (ctx: DecoratorContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.decorators`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecorators?: (ctx: DecoratorsContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.decorated`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDecorated?: (ctx: DecoratedContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.funcdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFuncdef?: (ctx: FuncdefContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.parameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitParameters?: (ctx: ParametersContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.varargslist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVarargslist?: (ctx: VarargslistContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.fpdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFpdef?: (ctx: FpdefContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.fplist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFplist?: (ctx: FplistContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStmt?: (ctx: StmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.simple_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimple_stmt?: (ctx: Simple_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.small_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSmall_stmt?: (ctx: Small_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.expr_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr_stmt?: (ctx: Expr_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.augassign`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAugassign?: (ctx: AugassignContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.print_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrint_stmt?: (ctx: Print_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.del_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDel_stmt?: (ctx: Del_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.pass_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPass_stmt?: (ctx: Pass_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.flow_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFlow_stmt?: (ctx: Flow_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.break_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreak_stmt?: (ctx: Break_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.continue_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinue_stmt?: (ctx: Continue_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.return_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturn_stmt?: (ctx: Return_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.yield_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYield_stmt?: (ctx: Yield_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.raise_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRaise_stmt?: (ctx: Raise_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.import_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_stmt?: (ctx: Import_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.import_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_name?: (ctx: Import_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.import_from`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_from?: (ctx: Import_fromContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.import_as_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_as_name?: (ctx: Import_as_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.dotted_as_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotted_as_name?: (ctx: Dotted_as_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.import_as_names`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImport_as_names?: (ctx: Import_as_namesContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.dotted_as_names`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotted_as_names?: (ctx: Dotted_as_namesContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.dotted_name`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDotted_name?: (ctx: Dotted_nameContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.global_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGlobal_stmt?: (ctx: Global_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.exec_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExec_stmt?: (ctx: Exec_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.assert_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssert_stmt?: (ctx: Assert_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.compound_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompound_stmt?: (ctx: Compound_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.if_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIf_stmt?: (ctx: If_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.while_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhile_stmt?: (ctx: While_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.for_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFor_stmt?: (ctx: For_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.try_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTry_stmt?: (ctx: Try_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.with_stmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith_stmt?: (ctx: With_stmtContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.with_item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWith_item?: (ctx: With_itemContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.except_clause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExcept_clause?: (ctx: Except_clauseContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.suite`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuite?: (ctx: SuiteContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.testlist_safe`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestlist_safe?: (ctx: Testlist_safeContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.old_test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOld_test?: (ctx: Old_testContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.old_lambdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOld_lambdef?: (ctx: Old_lambdefContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTest?: (ctx: TestContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.or_test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOr_test?: (ctx: Or_testContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.and_test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_test?: (ctx: And_testContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.not_test`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNot_test?: (ctx: Not_testContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.comparison`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComparison?: (ctx: ComparisonContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.comp_op`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComp_op?: (ctx: Comp_opContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpr?: (ctx: ExprContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.xor_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitXor_expr?: (ctx: Xor_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.and_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnd_expr?: (ctx: And_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.shift_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShift_expr?: (ctx: Shift_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.arith_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArith_expr?: (ctx: Arith_exprContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.term`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTerm?: (ctx: TermContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.factor`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFactor?: (ctx: FactorContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.power`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPower?: (ctx: PowerContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.atom`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAtom?: (ctx: AtomContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.listmaker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitListmaker?: (ctx: ListmakerContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.testlist_comp`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestlist_comp?: (ctx: Testlist_compContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.lambdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdef?: (ctx: LambdefContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.trailer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrailer?: (ctx: TrailerContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.subscriptlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscriptlist?: (ctx: SubscriptlistContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.subscript`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSubscript?: (ctx: SubscriptContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.sliceop`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSliceop?: (ctx: SliceopContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.exprlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExprlist?: (ctx: ExprlistContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.testlist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestlist?: (ctx: TestlistContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.dictorsetmaker`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDictorsetmaker?: (ctx: DictorsetmakerContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.classdef`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassdef?: (ctx: ClassdefContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.arglist`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArglist?: (ctx: ArglistContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.argument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgument?: (ctx: ArgumentContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.list_iter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_iter?: (ctx: List_iterContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.list_for`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_for?: (ctx: List_forContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.list_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitList_if?: (ctx: List_ifContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.comp_iter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComp_iter?: (ctx: Comp_iterContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.comp_for`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComp_for?: (ctx: Comp_forContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.comp_if`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComp_if?: (ctx: Comp_ifContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.testlist1`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTestlist1?: (ctx: Testlist1Context) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.encoding_decl`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEncoding_decl?: (ctx: Encoding_declContext) => Result;

	/**
	 * Visit a parse tree produced by `Python2Parser.yield_expr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitYield_expr?: (ctx: Yield_exprContext) => Result;
}

