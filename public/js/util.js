const Util = (() => {
    const obj = {}
    obj.getFormData = (formData, isObject) => {
        const data = {}

        for (var key of formData.keys()) {
            const values = formData.getAll(key)

            if (values.length > 1 || isObject) {
                data[key] = {}
                for (val of values) {
                    data[key][val] = true
                }
            } else {
                data[key] = values[0]
            }
        }

        return data
    }

    return obj
})()