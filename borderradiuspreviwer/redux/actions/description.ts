export const GET_DESCRIPTION = 'DESCRIPTION';


export const getDescription = (description: string) => {
    return {
        type: GET_DESCRIPTION,
        description: description, 
    }
}