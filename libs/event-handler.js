global.EventHandler = (() => {
    let topics = {};
    let hOP = topics.hasOwnProperty;

    return {
        subscribe: (topic, listener) => {
            if(!hOP.call(topics, topic.name)) topics[topic.name] = [];
            let index = topics[topic.name].push(listener)-1;
            return {
                remove: () => {
                    delete topics[topic.name][index];
                }
            };
        },
        publish: (topic) => {
            if(!hOP.call(topics, topic.__proto__.constructor.name)) return;
            topics[topic.__proto__.constructor.name].forEach((item) => {
                item(...Object.values(topic));
            });
        }
    };
})();