import { Node } from "unist";
const find = require("unist-util-find");

type AllNode<Tree extends Node> = {
  0: Tree;
  1: Tree extends { children: (infer U)[] }
    ? U extends Node
      ? Tree | AllNode<U>
      : Tree
    : never;
}[Tree extends { children: unknown[] } ? 1 : 0];

type CondObj<Tree extends Node> = Partial<AllNode<Tree>>;

type CondFn<Tree extends Node> = (node: AllNode<Tree>) => boolean;

type FindElement = <
  Tree extends Node,
  Cond extends CondFn<Tree> | CondObj<Tree> | string
>(
  tree: Tree,
  cond: Cond
) =>
  | (Cond extends CondObj<Tree>
      ? Extract<AllNode<Tree>, Partial<Cond>>
      : AllNode<Tree>)
  | undefined;

export const findElement = find as FindElement;
