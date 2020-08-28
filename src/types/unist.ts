/*\
 * This definition is based on https://github.com/syntax-tree/unist.
 * The last reference is 2020.8.28.
\*/

interface Point {
  line: number;
  column: number;
  offset?: number;
}

interface Position {
  start: Point;
  end: Point;
  indent?: number;
}

interface Data {
  [x: string]: unknown;
}

export interface Node {
  type: string;
  data?: Data;
  position?: Position;
}

export interface Parent extends Node {
  children: Node[];
}

export interface Literal extends Node {
  value: unknown;
}
