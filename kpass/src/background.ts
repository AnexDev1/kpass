export {}

chrome.runtime.onMessage.addListener(function (
	request: { message: string; data: Record<string, unknown> },
	sender,
	sendResponse
) {
	try {
		chrome.storage.local.set({ formData: request.data }, function () {})
		console.log(chrome.action)
		chrome.action.openPopup()
	} catch (err) {
		console.log(err)
	}
	openMiniWindow()
	// chrome.action
	// 	.openPopup()
	// 	.then(() => {
	// 		sendResponse({ status: "popup opned" })
	// 		openMiniWindow()
	// 	})
	// 	.catch((err) => {
	// 		sendResponse({ status: "failed to open" })
	// 		openMiniWindow()
	// 	})
})

function openMiniWindow() {
	chrome.windows.create({
		url: chrome.runtime.getURL("tabs/savePassword.html"),
		type: "popup",
		width: 500,
		height: 400
	})
}
