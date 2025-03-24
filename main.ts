import { serveDir, serveFile } from "jsr:@std/http/file-server";

const serveDirs = async (request: Request, dirs: ReadonlyArray<string>) => {
	let response = new Response("404: Not Found", { status: 404 });

	for (
		let index = 0;
		index < dirs.length && response.status !== 200;
		index++
	) {
		response = await serveDir(request, { fsRoot: dirs[index] });
	}

	return response;
};

const browserPath = "./dist/hls-player/browser";

Deno.serve((request: Request) => {
	const { pathname } = new URL(request.url);

	return pathname === "/"
		? serveFile(request, `${browserPath}/index.html`)
		: pathname.startsWith("/")
		? serveDirs(request, [browserPath, "./public"])
		: new Response("404: Not Found", { status: 404 });
});
