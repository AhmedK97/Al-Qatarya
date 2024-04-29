import { router } from "@inertiajs/vue3";

const dontShowMeTipsAnymore = (uuid) => {
    console.log(uuid);
    router.post(
        route("build-cv.dont-show-me-tips-anymore", uuid),
        { dontShowMeTipsAnymore: true },
        { preserveScroll: true }
    );
};

export default dontShowMeTipsAnymore;
