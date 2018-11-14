// Generated from lib/tree/ast/antlr/java/Java9.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { LiteralContext } from "../Java9Parser";
import { PrimitiveTypeContext } from "../Java9Parser";
import { NumericTypeContext } from "../Java9Parser";
import { IntegralTypeContext } from "../Java9Parser";
import { FloatingPointTypeContext } from "../Java9Parser";
import { ReferenceTypeContext } from "../Java9Parser";
import { ClassOrInterfaceTypeContext } from "../Java9Parser";
import { ClassTypeContext } from "../Java9Parser";
import { ClassType_lf_classOrInterfaceTypeContext } from "../Java9Parser";
import { ClassType_lfno_classOrInterfaceTypeContext } from "../Java9Parser";
import { InterfaceTypeContext } from "../Java9Parser";
import { InterfaceType_lf_classOrInterfaceTypeContext } from "../Java9Parser";
import { InterfaceType_lfno_classOrInterfaceTypeContext } from "../Java9Parser";
import { TypeVariableContext } from "../Java9Parser";
import { ArrayTypeContext } from "../Java9Parser";
import { DimsContext } from "../Java9Parser";
import { TypeParameterContext } from "../Java9Parser";
import { TypeParameterModifierContext } from "../Java9Parser";
import { TypeBoundContext } from "../Java9Parser";
import { AdditionalBoundContext } from "../Java9Parser";
import { TypeArgumentsContext } from "../Java9Parser";
import { TypeArgumentListContext } from "../Java9Parser";
import { TypeArgumentContext } from "../Java9Parser";
import { WildcardContext } from "../Java9Parser";
import { WildcardBoundsContext } from "../Java9Parser";
import { ModuleNameContext } from "../Java9Parser";
import { PackageNameContext } from "../Java9Parser";
import { TypeNameContext } from "../Java9Parser";
import { PackageOrTypeNameContext } from "../Java9Parser";
import { ExpressionNameContext } from "../Java9Parser";
import { MethodNameContext } from "../Java9Parser";
import { AmbiguousNameContext } from "../Java9Parser";
import { CompilationUnitContext } from "../Java9Parser";
import { OrdinaryCompilationContext } from "../Java9Parser";
import { ModularCompilationContext } from "../Java9Parser";
import { PackageDeclarationContext } from "../Java9Parser";
import { PackageModifierContext } from "../Java9Parser";
import { ImportDeclarationContext } from "../Java9Parser";
import { SingleTypeImportDeclarationContext } from "../Java9Parser";
import { TypeImportOnDemandDeclarationContext } from "../Java9Parser";
import { SingleStaticImportDeclarationContext } from "../Java9Parser";
import { StaticImportOnDemandDeclarationContext } from "../Java9Parser";
import { TypeDeclarationContext } from "../Java9Parser";
import { ModuleDeclarationContext } from "../Java9Parser";
import { ModuleDirectiveContext } from "../Java9Parser";
import { RequiresModifierContext } from "../Java9Parser";
import { ClassDeclarationContext } from "../Java9Parser";
import { NormalClassDeclarationContext } from "../Java9Parser";
import { ClassModifierContext } from "../Java9Parser";
import { TypeParametersContext } from "../Java9Parser";
import { TypeParameterListContext } from "../Java9Parser";
import { SuperclassContext } from "../Java9Parser";
import { SuperinterfacesContext } from "../Java9Parser";
import { InterfaceTypeListContext } from "../Java9Parser";
import { ClassBodyContext } from "../Java9Parser";
import { ClassBodyDeclarationContext } from "../Java9Parser";
import { ClassMemberDeclarationContext } from "../Java9Parser";
import { FieldDeclarationContext } from "../Java9Parser";
import { FieldModifierContext } from "../Java9Parser";
import { VariableDeclaratorListContext } from "../Java9Parser";
import { VariableDeclaratorContext } from "../Java9Parser";
import { VariableDeclaratorIdContext } from "../Java9Parser";
import { VariableInitializerContext } from "../Java9Parser";
import { UnannTypeContext } from "../Java9Parser";
import { UnannPrimitiveTypeContext } from "../Java9Parser";
import { UnannReferenceTypeContext } from "../Java9Parser";
import { UnannClassOrInterfaceTypeContext } from "../Java9Parser";
import { UnannClassTypeContext } from "../Java9Parser";
import { UnannClassType_lf_unannClassOrInterfaceTypeContext } from "../Java9Parser";
import { UnannClassType_lfno_unannClassOrInterfaceTypeContext } from "../Java9Parser";
import { UnannInterfaceTypeContext } from "../Java9Parser";
import { UnannInterfaceType_lf_unannClassOrInterfaceTypeContext } from "../Java9Parser";
import { UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext } from "../Java9Parser";
import { UnannTypeVariableContext } from "../Java9Parser";
import { UnannArrayTypeContext } from "../Java9Parser";
import { MethodDeclarationContext } from "../Java9Parser";
import { MethodModifierContext } from "../Java9Parser";
import { MethodHeaderContext } from "../Java9Parser";
import { ResultContext } from "../Java9Parser";
import { MethodDeclaratorContext } from "../Java9Parser";
import { FormalParameterListContext } from "../Java9Parser";
import { FormalParametersContext } from "../Java9Parser";
import { FormalParameterContext } from "../Java9Parser";
import { VariableModifierContext } from "../Java9Parser";
import { LastFormalParameterContext } from "../Java9Parser";
import { ReceiverParameterContext } from "../Java9Parser";
import { Throws_Context } from "../Java9Parser";
import { ExceptionTypeListContext } from "../Java9Parser";
import { ExceptionTypeContext } from "../Java9Parser";
import { MethodBodyContext } from "../Java9Parser";
import { InstanceInitializerContext } from "../Java9Parser";
import { StaticInitializerContext } from "../Java9Parser";
import { ConstructorDeclarationContext } from "../Java9Parser";
import { ConstructorModifierContext } from "../Java9Parser";
import { ConstructorDeclaratorContext } from "../Java9Parser";
import { SimpleTypeNameContext } from "../Java9Parser";
import { ConstructorBodyContext } from "../Java9Parser";
import { ExplicitConstructorInvocationContext } from "../Java9Parser";
import { EnumDeclarationContext } from "../Java9Parser";
import { EnumBodyContext } from "../Java9Parser";
import { EnumConstantListContext } from "../Java9Parser";
import { EnumConstantContext } from "../Java9Parser";
import { EnumConstantModifierContext } from "../Java9Parser";
import { EnumBodyDeclarationsContext } from "../Java9Parser";
import { InterfaceDeclarationContext } from "../Java9Parser";
import { NormalInterfaceDeclarationContext } from "../Java9Parser";
import { InterfaceModifierContext } from "../Java9Parser";
import { ExtendsInterfacesContext } from "../Java9Parser";
import { InterfaceBodyContext } from "../Java9Parser";
import { InterfaceMemberDeclarationContext } from "../Java9Parser";
import { ConstantDeclarationContext } from "../Java9Parser";
import { ConstantModifierContext } from "../Java9Parser";
import { InterfaceMethodDeclarationContext } from "../Java9Parser";
import { InterfaceMethodModifierContext } from "../Java9Parser";
import { AnnotationTypeDeclarationContext } from "../Java9Parser";
import { AnnotationTypeBodyContext } from "../Java9Parser";
import { AnnotationTypeMemberDeclarationContext } from "../Java9Parser";
import { AnnotationTypeElementDeclarationContext } from "../Java9Parser";
import { AnnotationTypeElementModifierContext } from "../Java9Parser";
import { DefaultValueContext } from "../Java9Parser";
import { AnnotationContext } from "../Java9Parser";
import { NormalAnnotationContext } from "../Java9Parser";
import { ElementValuePairListContext } from "../Java9Parser";
import { ElementValuePairContext } from "../Java9Parser";
import { ElementValueContext } from "../Java9Parser";
import { ElementValueArrayInitializerContext } from "../Java9Parser";
import { ElementValueListContext } from "../Java9Parser";
import { MarkerAnnotationContext } from "../Java9Parser";
import { SingleElementAnnotationContext } from "../Java9Parser";
import { ArrayInitializerContext } from "../Java9Parser";
import { VariableInitializerListContext } from "../Java9Parser";
import { BlockContext } from "../Java9Parser";
import { BlockStatementsContext } from "../Java9Parser";
import { BlockStatementContext } from "../Java9Parser";
import { LocalVariableDeclarationStatementContext } from "../Java9Parser";
import { LocalVariableDeclarationContext } from "../Java9Parser";
import { StatementContext } from "../Java9Parser";
import { StatementNoShortIfContext } from "../Java9Parser";
import { StatementWithoutTrailingSubstatementContext } from "../Java9Parser";
import { EmptyStatementContext } from "../Java9Parser";
import { LabeledStatementContext } from "../Java9Parser";
import { LabeledStatementNoShortIfContext } from "../Java9Parser";
import { ExpressionStatementContext } from "../Java9Parser";
import { StatementExpressionContext } from "../Java9Parser";
import { IfThenStatementContext } from "../Java9Parser";
import { IfThenElseStatementContext } from "../Java9Parser";
import { IfThenElseStatementNoShortIfContext } from "../Java9Parser";
import { AssertStatementContext } from "../Java9Parser";
import { SwitchStatementContext } from "../Java9Parser";
import { SwitchBlockContext } from "../Java9Parser";
import { SwitchBlockStatementGroupContext } from "../Java9Parser";
import { SwitchLabelsContext } from "../Java9Parser";
import { SwitchLabelContext } from "../Java9Parser";
import { EnumConstantNameContext } from "../Java9Parser";
import { WhileStatementContext } from "../Java9Parser";
import { WhileStatementNoShortIfContext } from "../Java9Parser";
import { DoStatementContext } from "../Java9Parser";
import { ForStatementContext } from "../Java9Parser";
import { ForStatementNoShortIfContext } from "../Java9Parser";
import { BasicForStatementContext } from "../Java9Parser";
import { BasicForStatementNoShortIfContext } from "../Java9Parser";
import { ForInitContext } from "../Java9Parser";
import { ForUpdateContext } from "../Java9Parser";
import { StatementExpressionListContext } from "../Java9Parser";
import { EnhancedForStatementContext } from "../Java9Parser";
import { EnhancedForStatementNoShortIfContext } from "../Java9Parser";
import { BreakStatementContext } from "../Java9Parser";
import { ContinueStatementContext } from "../Java9Parser";
import { ReturnStatementContext } from "../Java9Parser";
import { ThrowStatementContext } from "../Java9Parser";
import { SynchronizedStatementContext } from "../Java9Parser";
import { TryStatementContext } from "../Java9Parser";
import { CatchesContext } from "../Java9Parser";
import { CatchClauseContext } from "../Java9Parser";
import { CatchFormalParameterContext } from "../Java9Parser";
import { CatchTypeContext } from "../Java9Parser";
import { Finally_Context } from "../Java9Parser";
import { TryWithResourcesStatementContext } from "../Java9Parser";
import { ResourceSpecificationContext } from "../Java9Parser";
import { ResourceListContext } from "../Java9Parser";
import { ResourceContext } from "../Java9Parser";
import { VariableAccessContext } from "../Java9Parser";
import { PrimaryContext } from "../Java9Parser";
import { PrimaryNoNewArrayContext } from "../Java9Parser";
import { PrimaryNoNewArray_lf_arrayAccessContext } from "../Java9Parser";
import { PrimaryNoNewArray_lfno_arrayAccessContext } from "../Java9Parser";
import { PrimaryNoNewArray_lf_primaryContext } from "../Java9Parser";
import { PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext } from "../Java9Parser";
import { PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext } from "../Java9Parser";
import { PrimaryNoNewArray_lfno_primaryContext } from "../Java9Parser";
import { PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext } from "../Java9Parser";
import { PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext } from "../Java9Parser";
import { ClassLiteralContext } from "../Java9Parser";
import { ClassInstanceCreationExpressionContext } from "../Java9Parser";
import { ClassInstanceCreationExpression_lf_primaryContext } from "../Java9Parser";
import { ClassInstanceCreationExpression_lfno_primaryContext } from "../Java9Parser";
import { TypeArgumentsOrDiamondContext } from "../Java9Parser";
import { FieldAccessContext } from "../Java9Parser";
import { FieldAccess_lf_primaryContext } from "../Java9Parser";
import { FieldAccess_lfno_primaryContext } from "../Java9Parser";
import { ArrayAccessContext } from "../Java9Parser";
import { ArrayAccess_lf_primaryContext } from "../Java9Parser";
import { ArrayAccess_lfno_primaryContext } from "../Java9Parser";
import { MethodInvocationContext } from "../Java9Parser";
import { MethodInvocation_lf_primaryContext } from "../Java9Parser";
import { MethodInvocation_lfno_primaryContext } from "../Java9Parser";
import { ArgumentListContext } from "../Java9Parser";
import { MethodReferenceContext } from "../Java9Parser";
import { MethodReference_lf_primaryContext } from "../Java9Parser";
import { MethodReference_lfno_primaryContext } from "../Java9Parser";
import { ArrayCreationExpressionContext } from "../Java9Parser";
import { DimExprsContext } from "../Java9Parser";
import { DimExprContext } from "../Java9Parser";
import { ConstantExpressionContext } from "../Java9Parser";
import { ExpressionContext } from "../Java9Parser";
import { LambdaExpressionContext } from "../Java9Parser";
import { LambdaParametersContext } from "../Java9Parser";
import { InferredFormalParameterListContext } from "../Java9Parser";
import { LambdaBodyContext } from "../Java9Parser";
import { AssignmentExpressionContext } from "../Java9Parser";
import { AssignmentContext } from "../Java9Parser";
import { LeftHandSideContext } from "../Java9Parser";
import { AssignmentOperatorContext } from "../Java9Parser";
import { ConditionalExpressionContext } from "../Java9Parser";
import { ConditionalOrExpressionContext } from "../Java9Parser";
import { ConditionalAndExpressionContext } from "../Java9Parser";
import { InclusiveOrExpressionContext } from "../Java9Parser";
import { ExclusiveOrExpressionContext } from "../Java9Parser";
import { AndExpressionContext } from "../Java9Parser";
import { EqualityExpressionContext } from "../Java9Parser";
import { RelationalExpressionContext } from "../Java9Parser";
import { ShiftExpressionContext } from "../Java9Parser";
import { AdditiveExpressionContext } from "../Java9Parser";
import { MultiplicativeExpressionContext } from "../Java9Parser";
import { UnaryExpressionContext } from "../Java9Parser";
import { PreIncrementExpressionContext } from "../Java9Parser";
import { PreDecrementExpressionContext } from "../Java9Parser";
import { UnaryExpressionNotPlusMinusContext } from "../Java9Parser";
import { PostfixExpressionContext } from "../Java9Parser";
import { PostIncrementExpressionContext } from "../Java9Parser";
import { PostIncrementExpression_lf_postfixExpressionContext } from "../Java9Parser";
import { PostDecrementExpressionContext } from "../Java9Parser";
import { PostDecrementExpression_lf_postfixExpressionContext } from "../Java9Parser";
import { CastExpressionContext } from "../Java9Parser";
import { IdentifierContext } from "../Java9Parser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `Java9Parser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface Java9Visitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `Java9Parser.literal`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLiteral?: (ctx: LiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.primitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimitiveType?: (ctx: PrimitiveTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.numericType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericType?: (ctx: NumericTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.integralType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIntegralType?: (ctx: IntegralTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.floatingPointType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFloatingPointType?: (ctx: FloatingPointTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.referenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReferenceType?: (ctx: ReferenceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassOrInterfaceType?: (ctx: ClassOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.classType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassType?: (ctx: ClassTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.classType_lf_classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassType_lf_classOrInterfaceType?: (ctx: ClassType_lf_classOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.classType_lfno_classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassType_lfno_classOrInterfaceType?: (ctx: ClassType_lfno_classOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.interfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceType?: (ctx: InterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.interfaceType_lf_classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceType_lf_classOrInterfaceType?: (ctx: InterfaceType_lf_classOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.interfaceType_lfno_classOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceType_lfno_classOrInterfaceType?: (ctx: InterfaceType_lfno_classOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.typeVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeVariable?: (ctx: TypeVariableContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.arrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayType?: (ctx: ArrayTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.dims`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDims?: (ctx: DimsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.typeParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameter?: (ctx: TypeParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.typeParameterModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterModifier?: (ctx: TypeParameterModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.typeBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeBound?: (ctx: TypeBoundContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.additionalBound`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditionalBound?: (ctx: AdditionalBoundContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.typeArguments`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArguments?: (ctx: TypeArgumentsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.typeArgumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentList?: (ctx: TypeArgumentListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.typeArgument`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgument?: (ctx: TypeArgumentContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.wildcard`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcard?: (ctx: WildcardContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.wildcardBounds`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWildcardBounds?: (ctx: WildcardBoundsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.moduleName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleName?: (ctx: ModuleNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.packageName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageName?: (ctx: PackageNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.typeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeName?: (ctx: TypeNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.packageOrTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageOrTypeName?: (ctx: PackageOrTypeNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.expressionName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionName?: (ctx: ExpressionNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.methodName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodName?: (ctx: MethodNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.ambiguousName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAmbiguousName?: (ctx: AmbiguousNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.compilationUnit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCompilationUnit?: (ctx: CompilationUnitContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.ordinaryCompilation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitOrdinaryCompilation?: (ctx: OrdinaryCompilationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.modularCompilation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModularCompilation?: (ctx: ModularCompilationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.packageDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageDeclaration?: (ctx: PackageDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.packageModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPackageModifier?: (ctx: PackageModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.importDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitImportDeclaration?: (ctx: ImportDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.singleTypeImportDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleTypeImportDeclaration?: (ctx: SingleTypeImportDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.typeImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeImportOnDemandDeclaration?: (ctx: TypeImportOnDemandDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.singleStaticImportDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleStaticImportDeclaration?: (ctx: SingleStaticImportDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.staticImportOnDemandDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticImportOnDemandDeclaration?: (ctx: StaticImportOnDemandDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.typeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeDeclaration?: (ctx: TypeDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.moduleDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleDeclaration?: (ctx: ModuleDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.moduleDirective`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModuleDirective?: (ctx: ModuleDirectiveContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.requiresModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRequiresModifier?: (ctx: RequiresModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.classDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassDeclaration?: (ctx: ClassDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.normalClassDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalClassDeclaration?: (ctx: NormalClassDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.classModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassModifier?: (ctx: ClassModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.typeParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameters?: (ctx: TypeParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.typeParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeParameterList?: (ctx: TypeParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.superclass`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperclass?: (ctx: SuperclassContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.superinterfaces`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSuperinterfaces?: (ctx: SuperinterfacesContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.interfaceTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceTypeList?: (ctx: InterfaceTypeListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.classBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBody?: (ctx: ClassBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.classBodyDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassBodyDeclaration?: (ctx: ClassBodyDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.classMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassMemberDeclaration?: (ctx: ClassMemberDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.fieldDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldDeclaration?: (ctx: FieldDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.fieldModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldModifier?: (ctx: FieldModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.variableDeclaratorList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorList?: (ctx: VariableDeclaratorListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.variableDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclarator?: (ctx: VariableDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.variableDeclaratorId`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableDeclaratorId?: (ctx: VariableDeclaratorIdContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.variableInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializer?: (ctx: VariableInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unannType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannType?: (ctx: UnannTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unannPrimitiveType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannPrimitiveType?: (ctx: UnannPrimitiveTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unannReferenceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannReferenceType?: (ctx: UnannReferenceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannClassOrInterfaceType?: (ctx: UnannClassOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unannClassType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannClassType?: (ctx: UnannClassTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unannClassType_lf_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannClassType_lf_unannClassOrInterfaceType?: (ctx: UnannClassType_lf_unannClassOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unannClassType_lfno_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannClassType_lfno_unannClassOrInterfaceType?: (ctx: UnannClassType_lfno_unannClassOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unannInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannInterfaceType?: (ctx: UnannInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unannInterfaceType_lf_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannInterfaceType_lf_unannClassOrInterfaceType?: (ctx: UnannInterfaceType_lf_unannClassOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unannInterfaceType_lfno_unannClassOrInterfaceType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannInterfaceType_lfno_unannClassOrInterfaceType?: (ctx: UnannInterfaceType_lfno_unannClassOrInterfaceTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unannTypeVariable`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannTypeVariable?: (ctx: UnannTypeVariableContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unannArrayType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnannArrayType?: (ctx: UnannArrayTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.methodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclaration?: (ctx: MethodDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.methodModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodModifier?: (ctx: MethodModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.methodHeader`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodHeader?: (ctx: MethodHeaderContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.result`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResult?: (ctx: ResultContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.methodDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodDeclarator?: (ctx: MethodDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.formalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameterList?: (ctx: FormalParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.formalParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameters?: (ctx: FormalParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.formalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFormalParameter?: (ctx: FormalParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.variableModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableModifier?: (ctx: VariableModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.lastFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLastFormalParameter?: (ctx: LastFormalParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.receiverParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReceiverParameter?: (ctx: ReceiverParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.throws_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrows_?: (ctx: Throws_Context) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.exceptionTypeList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionTypeList?: (ctx: ExceptionTypeListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.exceptionType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExceptionType?: (ctx: ExceptionTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.methodBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodBody?: (ctx: MethodBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.instanceInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInstanceInitializer?: (ctx: InstanceInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.staticInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStaticInitializer?: (ctx: StaticInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.constructorDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclaration?: (ctx: ConstructorDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.constructorModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorModifier?: (ctx: ConstructorModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.constructorDeclarator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorDeclarator?: (ctx: ConstructorDeclaratorContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.simpleTypeName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSimpleTypeName?: (ctx: SimpleTypeNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.constructorBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstructorBody?: (ctx: ConstructorBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.explicitConstructorInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExplicitConstructorInvocation?: (ctx: ExplicitConstructorInvocationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.enumDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumDeclaration?: (ctx: EnumDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.enumBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBody?: (ctx: EnumBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.enumConstantList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstantList?: (ctx: EnumConstantListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.enumConstant`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstant?: (ctx: EnumConstantContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.enumConstantModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstantModifier?: (ctx: EnumConstantModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.enumBodyDeclarations`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumBodyDeclarations?: (ctx: EnumBodyDeclarationsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.interfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceDeclaration?: (ctx: InterfaceDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.normalInterfaceDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalInterfaceDeclaration?: (ctx: NormalInterfaceDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.interfaceModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceModifier?: (ctx: InterfaceModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.extendsInterfaces`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExtendsInterfaces?: (ctx: ExtendsInterfacesContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.interfaceBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceBody?: (ctx: InterfaceBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.interfaceMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMemberDeclaration?: (ctx: InterfaceMemberDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.constantDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantDeclaration?: (ctx: ConstantDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.constantModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantModifier?: (ctx: ConstantModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.interfaceMethodDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodDeclaration?: (ctx: InterfaceMethodDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.interfaceMethodModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInterfaceMethodModifier?: (ctx: InterfaceMethodModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.annotationTypeDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeDeclaration?: (ctx: AnnotationTypeDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.annotationTypeBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeBody?: (ctx: AnnotationTypeBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.annotationTypeMemberDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeMemberDeclaration?: (ctx: AnnotationTypeMemberDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.annotationTypeElementDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementDeclaration?: (ctx: AnnotationTypeElementDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.annotationTypeElementModifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotationTypeElementModifier?: (ctx: AnnotationTypeElementModifierContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.defaultValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDefaultValue?: (ctx: DefaultValueContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.annotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnnotation?: (ctx: AnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.normalAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNormalAnnotation?: (ctx: NormalAnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.elementValuePairList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePairList?: (ctx: ElementValuePairListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.elementValuePair`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValuePair?: (ctx: ElementValuePairContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.elementValue`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValue?: (ctx: ElementValueContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.elementValueArrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueArrayInitializer?: (ctx: ElementValueArrayInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.elementValueList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitElementValueList?: (ctx: ElementValueListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.markerAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMarkerAnnotation?: (ctx: MarkerAnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.singleElementAnnotation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSingleElementAnnotation?: (ctx: SingleElementAnnotationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.arrayInitializer`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayInitializer?: (ctx: ArrayInitializerContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.variableInitializerList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableInitializerList?: (ctx: VariableInitializerListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.block`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlock?: (ctx: BlockContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.blockStatements`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatements?: (ctx: BlockStatementsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.blockStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBlockStatement?: (ctx: BlockStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.localVariableDeclarationStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclarationStatement?: (ctx: LocalVariableDeclarationStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.localVariableDeclaration`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLocalVariableDeclaration?: (ctx: LocalVariableDeclarationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.statementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementNoShortIf?: (ctx: StatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.statementWithoutTrailingSubstatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementWithoutTrailingSubstatement?: (ctx: StatementWithoutTrailingSubstatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.emptyStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEmptyStatement?: (ctx: EmptyStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.labeledStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledStatement?: (ctx: LabeledStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.labeledStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabeledStatementNoShortIf?: (ctx: LabeledStatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.expressionStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpressionStatement?: (ctx: ExpressionStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.statementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpression?: (ctx: StatementExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.ifThenStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenStatement?: (ctx: IfThenStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.ifThenElseStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenElseStatement?: (ctx: IfThenElseStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.ifThenElseStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIfThenElseStatementNoShortIf?: (ctx: IfThenElseStatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.assertStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssertStatement?: (ctx: AssertStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.switchStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchStatement?: (ctx: SwitchStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.switchBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlock?: (ctx: SwitchBlockContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.switchBlockStatementGroup`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchBlockStatementGroup?: (ctx: SwitchBlockStatementGroupContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.switchLabels`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabels?: (ctx: SwitchLabelsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.switchLabel`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSwitchLabel?: (ctx: SwitchLabelContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.enumConstantName`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnumConstantName?: (ctx: EnumConstantNameContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.whileStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatement?: (ctx: WhileStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.whileStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhileStatementNoShortIf?: (ctx: WhileStatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.doStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDoStatement?: (ctx: DoStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.forStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatement?: (ctx: ForStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.forStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForStatementNoShortIf?: (ctx: ForStatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.basicForStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicForStatement?: (ctx: BasicForStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.basicForStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBasicForStatementNoShortIf?: (ctx: BasicForStatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.forInit`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForInit?: (ctx: ForInitContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.forUpdate`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitForUpdate?: (ctx: ForUpdateContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.statementExpressionList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatementExpressionList?: (ctx: StatementExpressionListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.enhancedForStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForStatement?: (ctx: EnhancedForStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.enhancedForStatementNoShortIf`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEnhancedForStatementNoShortIf?: (ctx: EnhancedForStatementNoShortIfContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.breakStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitBreakStatement?: (ctx: BreakStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.continueStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitContinueStatement?: (ctx: ContinueStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.returnStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStatement?: (ctx: ReturnStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.throwStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitThrowStatement?: (ctx: ThrowStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.synchronizedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitSynchronizedStatement?: (ctx: SynchronizedStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.tryStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryStatement?: (ctx: TryStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.catches`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatches?: (ctx: CatchesContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.catchClause`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchClause?: (ctx: CatchClauseContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.catchFormalParameter`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchFormalParameter?: (ctx: CatchFormalParameterContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.catchType`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCatchType?: (ctx: CatchTypeContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.finally_`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFinally_?: (ctx: Finally_Context) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.tryWithResourcesStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTryWithResourcesStatement?: (ctx: TryWithResourcesStatementContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.resourceSpecification`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceSpecification?: (ctx: ResourceSpecificationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.resourceList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResourceList?: (ctx: ResourceListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.resource`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitResource?: (ctx: ResourceContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.variableAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVariableAccess?: (ctx: VariableAccessContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimary?: (ctx: PrimaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.primaryNoNewArray`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray?: (ctx: PrimaryNoNewArrayContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.primaryNoNewArray_lf_arrayAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lf_arrayAccess?: (ctx: PrimaryNoNewArray_lf_arrayAccessContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.primaryNoNewArray_lfno_arrayAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lfno_arrayAccess?: (ctx: PrimaryNoNewArray_lfno_arrayAccessContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.primaryNoNewArray_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lf_primary?: (ctx: PrimaryNoNewArray_lf_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.primaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primary?: (ctx: PrimaryNoNewArray_lf_primary_lf_arrayAccess_lf_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.primaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primary?: (ctx: PrimaryNoNewArray_lf_primary_lfno_arrayAccess_lf_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.primaryNoNewArray_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.primaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primary_lf_arrayAccess_lfno_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.primaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primary?: (ctx: PrimaryNoNewArray_lfno_primary_lfno_arrayAccess_lfno_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.classLiteral`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassLiteral?: (ctx: ClassLiteralContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.classInstanceCreationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassInstanceCreationExpression?: (ctx: ClassInstanceCreationExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.classInstanceCreationExpression_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassInstanceCreationExpression_lf_primary?: (ctx: ClassInstanceCreationExpression_lf_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.classInstanceCreationExpression_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitClassInstanceCreationExpression_lfno_primary?: (ctx: ClassInstanceCreationExpression_lfno_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.typeArgumentsOrDiamond`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTypeArgumentsOrDiamond?: (ctx: TypeArgumentsOrDiamondContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.fieldAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldAccess?: (ctx: FieldAccessContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.fieldAccess_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldAccess_lf_primary?: (ctx: FieldAccess_lf_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.fieldAccess_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFieldAccess_lfno_primary?: (ctx: FieldAccess_lfno_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.arrayAccess`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccess?: (ctx: ArrayAccessContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.arrayAccess_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccess_lf_primary?: (ctx: ArrayAccess_lf_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.arrayAccess_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayAccess_lfno_primary?: (ctx: ArrayAccess_lfno_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.methodInvocation`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodInvocation?: (ctx: MethodInvocationContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.methodInvocation_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodInvocation_lf_primary?: (ctx: MethodInvocation_lf_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.methodInvocation_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodInvocation_lfno_primary?: (ctx: MethodInvocation_lfno_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.argumentList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArgumentList?: (ctx: ArgumentListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.methodReference`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodReference?: (ctx: MethodReferenceContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.methodReference_lf_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodReference_lf_primary?: (ctx: MethodReference_lf_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.methodReference_lfno_primary`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMethodReference_lfno_primary?: (ctx: MethodReference_lfno_primaryContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.arrayCreationExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitArrayCreationExpression?: (ctx: ArrayCreationExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.dimExprs`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimExprs?: (ctx: DimExprsContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.dimExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitDimExpr?: (ctx: DimExprContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.constantExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConstantExpression?: (ctx: ConstantExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.expression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExpression?: (ctx: ExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.lambdaExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaExpression?: (ctx: LambdaExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.lambdaParameters`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaParameters?: (ctx: LambdaParametersContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.inferredFormalParameterList`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInferredFormalParameterList?: (ctx: InferredFormalParameterListContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.lambdaBody`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLambdaBody?: (ctx: LambdaBodyContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.assignmentExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentExpression?: (ctx: AssignmentExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.assignment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignment?: (ctx: AssignmentContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.leftHandSide`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLeftHandSide?: (ctx: LeftHandSideContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.assignmentOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAssignmentOperator?: (ctx: AssignmentOperatorContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.conditionalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalExpression?: (ctx: ConditionalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.conditionalOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalOrExpression?: (ctx: ConditionalOrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.conditionalAndExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitConditionalAndExpression?: (ctx: ConditionalAndExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.inclusiveOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitInclusiveOrExpression?: (ctx: InclusiveOrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.exclusiveOrExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitExclusiveOrExpression?: (ctx: ExclusiveOrExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.andExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAndExpression?: (ctx: AndExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.equalityExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitEqualityExpression?: (ctx: EqualityExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.relationalExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitRelationalExpression?: (ctx: RelationalExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.shiftExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitShiftExpression?: (ctx: ShiftExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.additiveExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAdditiveExpression?: (ctx: AdditiveExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.multiplicativeExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitMultiplicativeExpression?: (ctx: MultiplicativeExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unaryExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpression?: (ctx: UnaryExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.preIncrementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.preDecrementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPreDecrementExpression?: (ctx: PreDecrementExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.unaryExpressionNotPlusMinus`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUnaryExpressionNotPlusMinus?: (ctx: UnaryExpressionNotPlusMinusContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostfixExpression?: (ctx: PostfixExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.postIncrementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.postIncrementExpression_lf_postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostIncrementExpression_lf_postfixExpression?: (ctx: PostIncrementExpression_lf_postfixExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.postDecrementExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostDecrementExpression?: (ctx: PostDecrementExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.postDecrementExpression_lf_postfixExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitPostDecrementExpression_lf_postfixExpression?: (ctx: PostDecrementExpression_lf_postfixExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.castExpression`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCastExpression?: (ctx: CastExpressionContext) => Result;
	/**
	 * Visit a parse tree produced by `Java9Parser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;
}

