import { Node } from "unist";
import map from "unist-util-map";
import { DocBookXast } from "@/types/docbook";

type AllNode<Tree extends Node> = {
  0: Tree;
  1: Tree extends { children: (infer U)[] }
    ? U extends Node
      ? Tree | AllNode<U>
      : Tree
    : never;
}[Tree extends { children: unknown[] } ? 1 : 0];

export const mapUnist = map as MapUnist;

type MapUnist = <Tree extends Node, Callback extends MapFn<Tree>>(
  tree: Tree,
  mapFn: Callback
) => ReturnType<Callback>;

type MapFn<Tree extends Node> = (
  node: AllNode<Tree>,
  index?: number | null,
  parent?: AllNode<Tree> | null
) => AllNode<Tree>;

export const mapEndomorphic = map as MapEndomorphic;

type MapEndomorphic = <
  Tree extends Node,
  Callback extends EndomorphicMapFn<Tree, AllNode<Tree>>
>(
  tree: Tree,
  mapFn: Callback
) => Tree;

type EndomorphicMapFn<Tree extends Node, Run extends AllNode<Tree>> = (
  node: Run,
  index?: number | null,
  parent?: AllNode<Tree> | null
) => Run extends Tree ? Tree : AllNode<Tree>;
