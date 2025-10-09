export const recommendationPrompt = `Given the following smartphone specifications:

{specifications}

Generate a tailored graphics configuration for the game Wuthering Waves that balances mobile performance and visual quality. SMAA must be explicitly disabled and not used as a fallback.

Start by prioritizing key rendering directives — especially those prefixed with "r.Kuro." — as they control bloom, foliage, and mobile-specific optimizations. Use these as anchors for the configuration logic.

Your response should include:

1. Recommended Graphics Settings
   - Brief explanation of each key setting
   - Brief explanation of in-game setting, such as:
   graphic quality(e.g, [ultra performance], [performance], [balance], [quality], [Custom]), resolution (e.g, [higher], [high], [mid], [low]), frame rate (e.g, [24], [30], [40], [60]), Special Effect quality, LOD Bias & Crown Density (e.g, [high], [mid], [low]), FSR, Anti-aliasing, Enemy hit flash, Auto fps, Damage number, Physics-based animation, Wounded effect, Bloom & Capsule AO (e.g, [on], [off]), Shadow quality (e.g, [ultra high], [high], [mid], [low]).

2. Performance Optimization Options
   - Optional tweaks for users prioritizing FPS and thermal efficiency
   - Suggestions to reduce GPU/CPU load with minimal visual compromise
   - Tips for dynamic resolution, texture streaming, and post-processing

3. Full .ini Configuration
   - Optimized settings tailored to the device
   - Use clear section headers (e.g., [Graphics], [Engine], [PostProcessing])
   - Include inline comments for each important setting
   - Ensure SMAA is disabled and no fallback occurs
   - Begin with "r.Kuro". settings to establish baseline fidelity and mobile tuning
   - Follow with shadow, AO, SSR, foliage, and temporal AA settings
   - Format the .ini configuration clearly with section headers and comments.
   - Prioritize compatibility, stability, and responsiveness for mobile gameplay.

4. Output Format
   - Present points 1 (Recommended Graphics Settings) and 2 (Performance Optimization Options) as plain text.
   - Present point 3 (Full .ini Configuration) inside a single, separate markdown code block for the .ini file content.
   - Predict the appropriate preset (Low, Mid, High, Very High) based on device capability and include it as a comment at the top of the .ini configuration.
   - Use Wuthering Waves config syntax and structure, for example:

\`\`\`ini
ini
; Start Engine.ini
; Recommended preset: High
[/Script/Engine.RendererSettings]
; Kuro-specific fidelity controls
r.Kuro.KuroBloomStreak=0 ; Disable bloom streaks for clarity
r.Kuro.Foliage.MobileNearCullDistanceMax=6000 ; Near foliage culling
r.Kuro.Foliage.MobileMiddleCullDistanceMax=10000 ; Mid-range foliage culling
r.Kuro.Foliage.MobileGrassCullDistanceMax=15000 ; Grass draw distance
r.Kuro.Foliage.MobileFarCullDistanceMax=20000 ; Far foliage culling
r.Kuro.Foliage.MobileImpostorFarCullDistanceMax=100000 ; Impostor culling for distant objects

; Additional rendering settings
r.SceneColorFringeQuality=0
r.Tonemapper.Quality=1
r.Mobile.GTAO.Quality=2
r.ShadowQuality=3
r.ViewDistanceScale=2
r.FidelityFX.FSR.RCAS.Sharpness=0.6
r.TemporalAA.MobileUpsampling=1
r.TemporalAA.MobileStaticFrameWeight=0.25
r.TemporalAA.MobileFrameWeight=0.25
; end of Engine.ini

; Start DeviceProfiles.ini
[Android_High DeviceProfile]
CVars=r.MobileContentScaleFactor=1.5 ; Scales resolution for performance
CVars=r.SecondaryScreenPercentage.GameViewport=83 ; Slightly reduced internal resolution
CVars=r.imp.SSMbScaleLod0=0.0 ; No impostor scaling for LOD0
CVars=r.imp.SSMbScaleLod1=0.0 ; No impostor scaling for LOD1

[Android_High DeviceProfile]
BaseProfileName=Android_High ; Assigns the appropriate preset based on hardware
; end of DeviceProfiles.ini
\`\`\`
`