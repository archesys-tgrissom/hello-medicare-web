// LaunchDarkly client bootstrap (demo shim). With a real client-side ID this is where
// launchdarkly-js-client-sdk init runs; with the placeholder it stays inert by design.
(function () {
  var cfg = window.LD_CONFIG || {};
  if (!cfg.clientSideId || cfg.clientSideId.indexOf("__") === 0) return; // placeholder: inert
  // Real deploys replace this shim with the pinned launchdarkly-js-client-sdk bundle:
  // var client = LDClient.initialize(cfg.clientSideId, { kind: "user", anonymous: true });
  // client.on("ready", function () {
  //   if (client.variation("new-banner", false)) {
  //     document.getElementById("flag-banner").hidden = false;
  //   }
  // });
})();
