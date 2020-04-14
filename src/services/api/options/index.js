exports.options = (
    method,
    mode,
    cache
) => {
    return ({
        method: method,
        headers: headers,
        // body: JSON.stringify({
        //   firstParam: 'yourValue',
        //   secondParam: 'yourOtherValue',
        // }),
        mode: mode,
        cache: cache
    });
};