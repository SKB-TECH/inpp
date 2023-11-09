
  export const errorMessageHadler = (error) => {
    const message = (error.response && error.response.data && error.response.data?.message) ||
      error.message.toString() ||
      error.toString();
    return message
  }
  
  export const toastOption = {
    loading: 'Vueillez Patiente ...',
    success: 'success',
    error: (error) => `Erreur: ${(error.response && error.response.data && error.response.data.message) ||
      error.message.toString() ||
      error.toString()}`,
  }
  
  
  export const redirectCandidat = (router,reponse,path) => {
    if (reponse.status===201) {
        router.replace(`/${path}`);;
    }

  }

  
  
  