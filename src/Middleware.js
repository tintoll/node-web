const Middleware = () => {
    const _middlewares = [];
    let _req, _res;

    const run = (req, res) => {
        _req = req;
        _res = res;

        _run(0);
    };

    const _run = (i, err) => {
        if(i < 0 || i >= _middlewares.length) return;

        const nextMw = _middlewares[i];
        const next = (err) => _run(i+1, err);

        if(err) {
            const isNextErrorMw = nextMw.length === 4;
            return isNextErrorMw ?
                    nextMw(err, _req, _res, next) :
                    _run(i+1, err);
        }

        if(nextMw._path) {
            const pathMatched = _req.path === nextMw._path;
            return pathMatched ? nextMw(_req, _res, next) : _run(i + 1);
        }

        nextMw(_req, _res, next);
    };

    const add = fn => {
        _middlewares.push(fn);
    };
    return {
        _middlewares,
        add,
        run
    };
};

module.exports = Middleware;