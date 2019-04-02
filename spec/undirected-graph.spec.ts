import { UndirectedGraph } from '../src/undirected-graph';

const ascending = ( a : number, b : number ) => a - b;

describe( 'Undirected graph', () => {

    it( 'calculates reachabled vertices of line graph', () => {
        const dg = new UndirectedGraph();
        [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ] ].forEach( ( el ) => dg.addEdge( el[ 0 ], el[ 1 ] ) );
        expect( dg.reachableVertices( 0 ).sort( ascending ) ).toEqual( [ 0, 1, 2, 3 ] );
        expect( dg.reachableVertices( 1 ).sort( ascending ) ).toEqual( [ 0, 1, 2, 3 ] );
        expect( dg.reachableVertices( 2 ).sort( ascending ) ).toEqual( [ 0, 1, 2, 3 ] );
    } );

} );