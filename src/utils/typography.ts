const htmlEscapes: Record<string, string> = {
	"&": "&amp;",
	"<": "&lt;",
	">": "&gt;",
	'"': "&quot;",
	"'": "&#39;",
};

export const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => htmlEscapes[char]);

export const widont = (value: string) =>
	escapeHtml(value.trim()).replace(/\s+([^\s<]+)\s*$/, "&nbsp;$1");
