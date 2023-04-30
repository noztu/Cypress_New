class DragAndDrop {

    elements = {

        blockA: () => cy.get('column-a'),
        blockB: () => cy.get('column-b'),
    }

    blockA(){
        return this.elements.blockA()
    }

    blockB(){
        return this.elements.blockB()
    }

}

export const dragAndDrop = new DragAndDrop()