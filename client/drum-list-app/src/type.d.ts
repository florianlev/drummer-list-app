interface IDrummer {
    id: number
    description: string
    marks: string[]
    styles: string[]
    nationality: string
    name: string
  }
  
  interface DrummerProps {
    drummer: IDrummer
  }
  
  type ApiDataType = {
    message: string
    status: string
    todos: ITodo[]
    todo?: ITodo
  }