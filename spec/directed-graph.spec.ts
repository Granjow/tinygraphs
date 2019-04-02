import { DirectedGraph } from '../src/directed-graph';

const ascending = ( a : number, b : number ) => a - b;

describe( 'Directed graph', () => {

    it( 'can add edges', () => {
        const dg = new DirectedGraph();
        expect( dg.hasEdge( 0, 10 ) ).toBe( false );
        dg.addEdge( 0, 10 );
        expect( dg.hasEdge( 0, 10 ) ).toBe( true );
    } );

    it( 'can export edges as array', () => {
        const dg = new DirectedGraph();
        const edges = [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ] ];
        edges.forEach( ( el ) => dg.addEdge( el[ 0 ], el[ 1 ] ) );
        expect( dg.edgeArray ).toEqual( edges );
    } );

    it( 'calculates reachabled vertices of line graph', () => {
        const dg = new DirectedGraph();
        [ [ 0, 1 ], [ 1, 2 ], [ 2, 3 ] ].forEach( ( el ) => dg.addEdge( el[ 0 ], el[ 1 ] ) );
        expect( dg.reachableVertices( 0 ).sort( ascending ) ).toEqual( [ 0, 1, 2, 3 ] );
        expect( dg.reachableVertices( 1 ).sort( ascending ) ).toEqual( [ 1, 2, 3 ] );
        expect( dg.reachableVertices( 2 ).sort( ascending ) ).toEqual( [ 2, 3 ] );
    } );

    it( 'calculates reachabled vertices of graph 1', () => {
        const dg = new DirectedGraph();
        [ [ 0, 1 ], [ 1, 2 ], [ 8, 3 ], [ 2, 9 ], [ 2, 8 ] ].forEach( ( el ) => dg.addEdge( el[ 0 ], el[ 1 ] ) );
        expect( dg.reachableVertices( 0 ).sort( ascending ) ).toEqual( [ 0, 1, 2, 3, 8, 9 ] );
    } );

    it( 'calculates reachabled vertices of graph 2', () => {
        const dg = new DirectedGraph();
        [ [ 0, 1 ], [ 1, 2 ], [ 3, 4 ], [ 3, 5 ] ].forEach( ( el ) => dg.addEdge( el[ 0 ], el[ 1 ] ) );
        expect( dg.reachableVertices( 0 ).sort( ascending ) ).toEqual( [ 0, 1, 2 ] );
        expect( dg.reachableVertices( 3 ).sort( ascending ) ).toEqual( [ 3, 4, 5 ] );
    } );

    it( 'colourises groups', () => {
        const dg = new DirectedGraph();
        [ [ 0, 1 ], [ 1, 2 ], [ 3, 4 ], [ 3, 5 ] ].forEach( ( el ) => dg.addEdge( el[ 0 ], el[ 1 ] ) );

        const colours = dg.colourise();
        expect( colours[ 0 ].sort( ascending ) ).toEqual( [ 0, 1, 2 ] );
        expect( colours[ 1 ].sort( ascending ) ).toEqual( [ 3, 4, 5 ] );

    } )

} );