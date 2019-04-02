import { DirectedGraph } from './directed-graph';

export class UndirectedGraph extends DirectedGraph {
    addEdge( from : number, to : number ) {
        super.addEdge( from, to );
        super.addEdge( to, from );
    }
}