// Generated from src/tree/ast/antlr/python2/Python2.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

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
 * This interface defines a complete listener for a parse tree produced by
 * `Python2Parser`.
 */
export interface Python2Listener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `Python2Parser.single_input`.
	 * @param ctx the parse tree
	 */
	enterSingle_input?: (ctx: Single_inputContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.single_input`.
	 * @param ctx the parse tree
	 */
	exitSingle_input?: (ctx: Single_inputContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.file_input`.
	 * @param ctx the parse tree
	 */
	enterFile_input?: (ctx: File_inputContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.file_input`.
	 * @param ctx the parse tree
	 */
	exitFile_input?: (ctx: File_inputContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.eval_input`.
	 * @param ctx the parse tree
	 */
	enterEval_input?: (ctx: Eval_inputContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.eval_input`.
	 * @param ctx the parse tree
	 */
	exitEval_input?: (ctx: Eval_inputContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.decorator`.
	 * @param ctx the parse tree
	 */
	enterDecorator?: (ctx: DecoratorContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.decorator`.
	 * @param ctx the parse tree
	 */
	exitDecorator?: (ctx: DecoratorContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.decorators`.
	 * @param ctx the parse tree
	 */
	enterDecorators?: (ctx: DecoratorsContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.decorators`.
	 * @param ctx the parse tree
	 */
	exitDecorators?: (ctx: DecoratorsContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.decorated`.
	 * @param ctx the parse tree
	 */
	enterDecorated?: (ctx: DecoratedContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.decorated`.
	 * @param ctx the parse tree
	 */
	exitDecorated?: (ctx: DecoratedContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.funcdef`.
	 * @param ctx the parse tree
	 */
	enterFuncdef?: (ctx: FuncdefContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.funcdef`.
	 * @param ctx the parse tree
	 */
	exitFuncdef?: (ctx: FuncdefContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.parameters`.
	 * @param ctx the parse tree
	 */
	enterParameters?: (ctx: ParametersContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.parameters`.
	 * @param ctx the parse tree
	 */
	exitParameters?: (ctx: ParametersContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.varargslist`.
	 * @param ctx the parse tree
	 */
	enterVarargslist?: (ctx: VarargslistContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.varargslist`.
	 * @param ctx the parse tree
	 */
	exitVarargslist?: (ctx: VarargslistContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.fpdef`.
	 * @param ctx the parse tree
	 */
	enterFpdef?: (ctx: FpdefContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.fpdef`.
	 * @param ctx the parse tree
	 */
	exitFpdef?: (ctx: FpdefContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.fplist`.
	 * @param ctx the parse tree
	 */
	enterFplist?: (ctx: FplistContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.fplist`.
	 * @param ctx the parse tree
	 */
	exitFplist?: (ctx: FplistContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	enterStmt?: (ctx: StmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.stmt`.
	 * @param ctx the parse tree
	 */
	exitStmt?: (ctx: StmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.simple_stmt`.
	 * @param ctx the parse tree
	 */
	enterSimple_stmt?: (ctx: Simple_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.simple_stmt`.
	 * @param ctx the parse tree
	 */
	exitSimple_stmt?: (ctx: Simple_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.small_stmt`.
	 * @param ctx the parse tree
	 */
	enterSmall_stmt?: (ctx: Small_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.small_stmt`.
	 * @param ctx the parse tree
	 */
	exitSmall_stmt?: (ctx: Small_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.expr_stmt`.
	 * @param ctx the parse tree
	 */
	enterExpr_stmt?: (ctx: Expr_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.expr_stmt`.
	 * @param ctx the parse tree
	 */
	exitExpr_stmt?: (ctx: Expr_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.augassign`.
	 * @param ctx the parse tree
	 */
	enterAugassign?: (ctx: AugassignContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.augassign`.
	 * @param ctx the parse tree
	 */
	exitAugassign?: (ctx: AugassignContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.print_stmt`.
	 * @param ctx the parse tree
	 */
	enterPrint_stmt?: (ctx: Print_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.print_stmt`.
	 * @param ctx the parse tree
	 */
	exitPrint_stmt?: (ctx: Print_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.del_stmt`.
	 * @param ctx the parse tree
	 */
	enterDel_stmt?: (ctx: Del_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.del_stmt`.
	 * @param ctx the parse tree
	 */
	exitDel_stmt?: (ctx: Del_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.pass_stmt`.
	 * @param ctx the parse tree
	 */
	enterPass_stmt?: (ctx: Pass_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.pass_stmt`.
	 * @param ctx the parse tree
	 */
	exitPass_stmt?: (ctx: Pass_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.flow_stmt`.
	 * @param ctx the parse tree
	 */
	enterFlow_stmt?: (ctx: Flow_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.flow_stmt`.
	 * @param ctx the parse tree
	 */
	exitFlow_stmt?: (ctx: Flow_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.break_stmt`.
	 * @param ctx the parse tree
	 */
	enterBreak_stmt?: (ctx: Break_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.break_stmt`.
	 * @param ctx the parse tree
	 */
	exitBreak_stmt?: (ctx: Break_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.continue_stmt`.
	 * @param ctx the parse tree
	 */
	enterContinue_stmt?: (ctx: Continue_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.continue_stmt`.
	 * @param ctx the parse tree
	 */
	exitContinue_stmt?: (ctx: Continue_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.return_stmt`.
	 * @param ctx the parse tree
	 */
	enterReturn_stmt?: (ctx: Return_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.return_stmt`.
	 * @param ctx the parse tree
	 */
	exitReturn_stmt?: (ctx: Return_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.yield_stmt`.
	 * @param ctx the parse tree
	 */
	enterYield_stmt?: (ctx: Yield_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.yield_stmt`.
	 * @param ctx the parse tree
	 */
	exitYield_stmt?: (ctx: Yield_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.raise_stmt`.
	 * @param ctx the parse tree
	 */
	enterRaise_stmt?: (ctx: Raise_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.raise_stmt`.
	 * @param ctx the parse tree
	 */
	exitRaise_stmt?: (ctx: Raise_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.import_stmt`.
	 * @param ctx the parse tree
	 */
	enterImport_stmt?: (ctx: Import_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.import_stmt`.
	 * @param ctx the parse tree
	 */
	exitImport_stmt?: (ctx: Import_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.import_name`.
	 * @param ctx the parse tree
	 */
	enterImport_name?: (ctx: Import_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.import_name`.
	 * @param ctx the parse tree
	 */
	exitImport_name?: (ctx: Import_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.import_from`.
	 * @param ctx the parse tree
	 */
	enterImport_from?: (ctx: Import_fromContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.import_from`.
	 * @param ctx the parse tree
	 */
	exitImport_from?: (ctx: Import_fromContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.import_as_name`.
	 * @param ctx the parse tree
	 */
	enterImport_as_name?: (ctx: Import_as_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.import_as_name`.
	 * @param ctx the parse tree
	 */
	exitImport_as_name?: (ctx: Import_as_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.dotted_as_name`.
	 * @param ctx the parse tree
	 */
	enterDotted_as_name?: (ctx: Dotted_as_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.dotted_as_name`.
	 * @param ctx the parse tree
	 */
	exitDotted_as_name?: (ctx: Dotted_as_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.import_as_names`.
	 * @param ctx the parse tree
	 */
	enterImport_as_names?: (ctx: Import_as_namesContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.import_as_names`.
	 * @param ctx the parse tree
	 */
	exitImport_as_names?: (ctx: Import_as_namesContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.dotted_as_names`.
	 * @param ctx the parse tree
	 */
	enterDotted_as_names?: (ctx: Dotted_as_namesContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.dotted_as_names`.
	 * @param ctx the parse tree
	 */
	exitDotted_as_names?: (ctx: Dotted_as_namesContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.dotted_name`.
	 * @param ctx the parse tree
	 */
	enterDotted_name?: (ctx: Dotted_nameContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.dotted_name`.
	 * @param ctx the parse tree
	 */
	exitDotted_name?: (ctx: Dotted_nameContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.global_stmt`.
	 * @param ctx the parse tree
	 */
	enterGlobal_stmt?: (ctx: Global_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.global_stmt`.
	 * @param ctx the parse tree
	 */
	exitGlobal_stmt?: (ctx: Global_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.exec_stmt`.
	 * @param ctx the parse tree
	 */
	enterExec_stmt?: (ctx: Exec_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.exec_stmt`.
	 * @param ctx the parse tree
	 */
	exitExec_stmt?: (ctx: Exec_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.assert_stmt`.
	 * @param ctx the parse tree
	 */
	enterAssert_stmt?: (ctx: Assert_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.assert_stmt`.
	 * @param ctx the parse tree
	 */
	exitAssert_stmt?: (ctx: Assert_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	enterCompound_stmt?: (ctx: Compound_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.compound_stmt`.
	 * @param ctx the parse tree
	 */
	exitCompound_stmt?: (ctx: Compound_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.if_stmt`.
	 * @param ctx the parse tree
	 */
	enterIf_stmt?: (ctx: If_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.if_stmt`.
	 * @param ctx the parse tree
	 */
	exitIf_stmt?: (ctx: If_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.while_stmt`.
	 * @param ctx the parse tree
	 */
	enterWhile_stmt?: (ctx: While_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.while_stmt`.
	 * @param ctx the parse tree
	 */
	exitWhile_stmt?: (ctx: While_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.for_stmt`.
	 * @param ctx the parse tree
	 */
	enterFor_stmt?: (ctx: For_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.for_stmt`.
	 * @param ctx the parse tree
	 */
	exitFor_stmt?: (ctx: For_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.try_stmt`.
	 * @param ctx the parse tree
	 */
	enterTry_stmt?: (ctx: Try_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.try_stmt`.
	 * @param ctx the parse tree
	 */
	exitTry_stmt?: (ctx: Try_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.with_stmt`.
	 * @param ctx the parse tree
	 */
	enterWith_stmt?: (ctx: With_stmtContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.with_stmt`.
	 * @param ctx the parse tree
	 */
	exitWith_stmt?: (ctx: With_stmtContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.with_item`.
	 * @param ctx the parse tree
	 */
	enterWith_item?: (ctx: With_itemContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.with_item`.
	 * @param ctx the parse tree
	 */
	exitWith_item?: (ctx: With_itemContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.except_clause`.
	 * @param ctx the parse tree
	 */
	enterExcept_clause?: (ctx: Except_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.except_clause`.
	 * @param ctx the parse tree
	 */
	exitExcept_clause?: (ctx: Except_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.suite`.
	 * @param ctx the parse tree
	 */
	enterSuite?: (ctx: SuiteContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.suite`.
	 * @param ctx the parse tree
	 */
	exitSuite?: (ctx: SuiteContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.testlist_safe`.
	 * @param ctx the parse tree
	 */
	enterTestlist_safe?: (ctx: Testlist_safeContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.testlist_safe`.
	 * @param ctx the parse tree
	 */
	exitTestlist_safe?: (ctx: Testlist_safeContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.old_test`.
	 * @param ctx the parse tree
	 */
	enterOld_test?: (ctx: Old_testContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.old_test`.
	 * @param ctx the parse tree
	 */
	exitOld_test?: (ctx: Old_testContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.old_lambdef`.
	 * @param ctx the parse tree
	 */
	enterOld_lambdef?: (ctx: Old_lambdefContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.old_lambdef`.
	 * @param ctx the parse tree
	 */
	exitOld_lambdef?: (ctx: Old_lambdefContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.test`.
	 * @param ctx the parse tree
	 */
	enterTest?: (ctx: TestContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.test`.
	 * @param ctx the parse tree
	 */
	exitTest?: (ctx: TestContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.or_test`.
	 * @param ctx the parse tree
	 */
	enterOr_test?: (ctx: Or_testContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.or_test`.
	 * @param ctx the parse tree
	 */
	exitOr_test?: (ctx: Or_testContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.and_test`.
	 * @param ctx the parse tree
	 */
	enterAnd_test?: (ctx: And_testContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.and_test`.
	 * @param ctx the parse tree
	 */
	exitAnd_test?: (ctx: And_testContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.not_test`.
	 * @param ctx the parse tree
	 */
	enterNot_test?: (ctx: Not_testContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.not_test`.
	 * @param ctx the parse tree
	 */
	exitNot_test?: (ctx: Not_testContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.comparison`.
	 * @param ctx the parse tree
	 */
	enterComparison?: (ctx: ComparisonContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.comparison`.
	 * @param ctx the parse tree
	 */
	exitComparison?: (ctx: ComparisonContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.comp_op`.
	 * @param ctx the parse tree
	 */
	enterComp_op?: (ctx: Comp_opContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.comp_op`.
	 * @param ctx the parse tree
	 */
	exitComp_op?: (ctx: Comp_opContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.expr`.
	 * @param ctx the parse tree
	 */
	enterExpr?: (ctx: ExprContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.expr`.
	 * @param ctx the parse tree
	 */
	exitExpr?: (ctx: ExprContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.xor_expr`.
	 * @param ctx the parse tree
	 */
	enterXor_expr?: (ctx: Xor_exprContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.xor_expr`.
	 * @param ctx the parse tree
	 */
	exitXor_expr?: (ctx: Xor_exprContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.and_expr`.
	 * @param ctx the parse tree
	 */
	enterAnd_expr?: (ctx: And_exprContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.and_expr`.
	 * @param ctx the parse tree
	 */
	exitAnd_expr?: (ctx: And_exprContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.shift_expr`.
	 * @param ctx the parse tree
	 */
	enterShift_expr?: (ctx: Shift_exprContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.shift_expr`.
	 * @param ctx the parse tree
	 */
	exitShift_expr?: (ctx: Shift_exprContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.arith_expr`.
	 * @param ctx the parse tree
	 */
	enterArith_expr?: (ctx: Arith_exprContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.arith_expr`.
	 * @param ctx the parse tree
	 */
	exitArith_expr?: (ctx: Arith_exprContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.term`.
	 * @param ctx the parse tree
	 */
	enterTerm?: (ctx: TermContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.term`.
	 * @param ctx the parse tree
	 */
	exitTerm?: (ctx: TermContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.factor`.
	 * @param ctx the parse tree
	 */
	enterFactor?: (ctx: FactorContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.factor`.
	 * @param ctx the parse tree
	 */
	exitFactor?: (ctx: FactorContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.power`.
	 * @param ctx the parse tree
	 */
	enterPower?: (ctx: PowerContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.power`.
	 * @param ctx the parse tree
	 */
	exitPower?: (ctx: PowerContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.atom`.
	 * @param ctx the parse tree
	 */
	enterAtom?: (ctx: AtomContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.atom`.
	 * @param ctx the parse tree
	 */
	exitAtom?: (ctx: AtomContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.listmaker`.
	 * @param ctx the parse tree
	 */
	enterListmaker?: (ctx: ListmakerContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.listmaker`.
	 * @param ctx the parse tree
	 */
	exitListmaker?: (ctx: ListmakerContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.testlist_comp`.
	 * @param ctx the parse tree
	 */
	enterTestlist_comp?: (ctx: Testlist_compContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.testlist_comp`.
	 * @param ctx the parse tree
	 */
	exitTestlist_comp?: (ctx: Testlist_compContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.lambdef`.
	 * @param ctx the parse tree
	 */
	enterLambdef?: (ctx: LambdefContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.lambdef`.
	 * @param ctx the parse tree
	 */
	exitLambdef?: (ctx: LambdefContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.trailer`.
	 * @param ctx the parse tree
	 */
	enterTrailer?: (ctx: TrailerContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.trailer`.
	 * @param ctx the parse tree
	 */
	exitTrailer?: (ctx: TrailerContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.subscriptlist`.
	 * @param ctx the parse tree
	 */
	enterSubscriptlist?: (ctx: SubscriptlistContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.subscriptlist`.
	 * @param ctx the parse tree
	 */
	exitSubscriptlist?: (ctx: SubscriptlistContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.subscript`.
	 * @param ctx the parse tree
	 */
	enterSubscript?: (ctx: SubscriptContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.subscript`.
	 * @param ctx the parse tree
	 */
	exitSubscript?: (ctx: SubscriptContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.sliceop`.
	 * @param ctx the parse tree
	 */
	enterSliceop?: (ctx: SliceopContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.sliceop`.
	 * @param ctx the parse tree
	 */
	exitSliceop?: (ctx: SliceopContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.exprlist`.
	 * @param ctx the parse tree
	 */
	enterExprlist?: (ctx: ExprlistContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.exprlist`.
	 * @param ctx the parse tree
	 */
	exitExprlist?: (ctx: ExprlistContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.testlist`.
	 * @param ctx the parse tree
	 */
	enterTestlist?: (ctx: TestlistContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.testlist`.
	 * @param ctx the parse tree
	 */
	exitTestlist?: (ctx: TestlistContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.dictorsetmaker`.
	 * @param ctx the parse tree
	 */
	enterDictorsetmaker?: (ctx: DictorsetmakerContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.dictorsetmaker`.
	 * @param ctx the parse tree
	 */
	exitDictorsetmaker?: (ctx: DictorsetmakerContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.classdef`.
	 * @param ctx the parse tree
	 */
	enterClassdef?: (ctx: ClassdefContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.classdef`.
	 * @param ctx the parse tree
	 */
	exitClassdef?: (ctx: ClassdefContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.arglist`.
	 * @param ctx the parse tree
	 */
	enterArglist?: (ctx: ArglistContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.arglist`.
	 * @param ctx the parse tree
	 */
	exitArglist?: (ctx: ArglistContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.argument`.
	 * @param ctx the parse tree
	 */
	enterArgument?: (ctx: ArgumentContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.argument`.
	 * @param ctx the parse tree
	 */
	exitArgument?: (ctx: ArgumentContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.list_iter`.
	 * @param ctx the parse tree
	 */
	enterList_iter?: (ctx: List_iterContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.list_iter`.
	 * @param ctx the parse tree
	 */
	exitList_iter?: (ctx: List_iterContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.list_for`.
	 * @param ctx the parse tree
	 */
	enterList_for?: (ctx: List_forContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.list_for`.
	 * @param ctx the parse tree
	 */
	exitList_for?: (ctx: List_forContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.list_if`.
	 * @param ctx the parse tree
	 */
	enterList_if?: (ctx: List_ifContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.list_if`.
	 * @param ctx the parse tree
	 */
	exitList_if?: (ctx: List_ifContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.comp_iter`.
	 * @param ctx the parse tree
	 */
	enterComp_iter?: (ctx: Comp_iterContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.comp_iter`.
	 * @param ctx the parse tree
	 */
	exitComp_iter?: (ctx: Comp_iterContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.comp_for`.
	 * @param ctx the parse tree
	 */
	enterComp_for?: (ctx: Comp_forContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.comp_for`.
	 * @param ctx the parse tree
	 */
	exitComp_for?: (ctx: Comp_forContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.comp_if`.
	 * @param ctx the parse tree
	 */
	enterComp_if?: (ctx: Comp_ifContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.comp_if`.
	 * @param ctx the parse tree
	 */
	exitComp_if?: (ctx: Comp_ifContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.testlist1`.
	 * @param ctx the parse tree
	 */
	enterTestlist1?: (ctx: Testlist1Context) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.testlist1`.
	 * @param ctx the parse tree
	 */
	exitTestlist1?: (ctx: Testlist1Context) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.encoding_decl`.
	 * @param ctx the parse tree
	 */
	enterEncoding_decl?: (ctx: Encoding_declContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.encoding_decl`.
	 * @param ctx the parse tree
	 */
	exitEncoding_decl?: (ctx: Encoding_declContext) => void;

	/**
	 * Enter a parse tree produced by `Python2Parser.yield_expr`.
	 * @param ctx the parse tree
	 */
	enterYield_expr?: (ctx: Yield_exprContext) => void;
	/**
	 * Exit a parse tree produced by `Python2Parser.yield_expr`.
	 * @param ctx the parse tree
	 */
	exitYield_expr?: (ctx: Yield_exprContext) => void;
}

