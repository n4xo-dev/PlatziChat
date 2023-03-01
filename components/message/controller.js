
export function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    console.group('Controller addMessage()')
    
    if (!user || !message) {
      console.error('[messageController] Missing user or message');
      reject('Incorrect input!');
      return false;
    }
  
    const fullMessage = {
      user,
      message,
      date: new Date(),
    };
  
    console.log({ fullMessage })

    resolve(fullMessage);
    console.groupEnd('Controller addMessage()')
  })

}