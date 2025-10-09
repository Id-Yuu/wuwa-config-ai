export const recommendationPrompt = `Based on the following smartphone specifications, recommend optimal graphics settings for the game Wuthering Waves. The goal is to balance visual quality and performance while explicitly avoiding SMAA rendering.

Smartphone Specifications:
{specifications}

Please provide:
1. Recommended graphics settings:
   - Brief explanation of each setting choice
   - Justification for excluding SMAA (e.g., performance impact, visual trade-offs)
   - Alternative anti-aliasing methods if applicable

2. Higher performance tweak options:
   - Optional settings for users prioritizing FPS and thermal efficiency
   - Suggestions for reducing GPU/CPU load without major visual compromise
   - Tips for dynamic resolution, texture streaming, and post-processing

3. Complete .ini configuration file:
   - Include optimized engine settings tailored to the device specs
   - Clearly formatted with sections (e.g., [Graphics], [Engine], [PostProcessing])
   - Use inline comments to explain each key setting
   - Ensure SMAA is disabled and no fallback to SMAA occurs
4. Putt the configuration in a code block from wuthering waves config command and make predicted to be used in mobile gameplay:
; Engine.ini 

; more higher
[/Script/Engine.RendererSettings]
r.Kuro.KuroBloomStreak=0
r.SceneColorFringeQuality=0
r.Tonemapper.Quality=1
r.Mobile.GTAO.Quality=3
r.ShadowQuality=5
r.Shadow.DistanceScale=3
r.Shadow.RadiusThreshold=0.02
r.Shadow.MaxCSMResolution=2048
r.Shadow.MinResolution=2048
r.Shadow.PerObjectShadowMapResolution=2048
r.Shadow.PerObjectResolutionMax=2048
r.Shadow.PerObjectResolutionMin=2048
r.ViewDistanceScale=3
foliage.LODDistanceScale=3
r.SSR.HalfResSceneColor=0
r.Mobile.WaterSSRResDiv=1.0
r.Mobile.WaterSSRStep=128
r.Mobile.EnableLandscapeSSR=1
r.Mobile.SSRLowPrecisionDepth=0
r.ReflectionCaptureResolution=256
r.TemporalAA.MobileUpsampling=1
r.TemporalAA.MobileStaticFrameWeight=0.25
r.TemporalAA.MobileFrameWeight=0.25
r.FidelityFX.FSR.SecondaryUpscale=1
r.FidelityFX.FSR.RCAS.Sharpness=1.0
r.MobileLightShaft.DownSampleFactor=1
r.Kuro.Foliage.MobileNearCullDistanceMax=6000
r.Kuro.Foliage.MobileMiddleCullDistanceMax=10000
r.Kuro.Foliage.MobileGrassCullDistanceMax=20000
r.Kuro.Foliage.MobileFarCullDistanceMax=25000
r.Kuro.Foliage.MobileImpostorFarCullDistanceMax=200000
wp.Runtime.KuroRuntimeStreamingRangeOverallScale=3.0

; High 
[/Script/Engine.RendererSettings]
r.Kuro.KuroBloomStreak=0
r.SceneColorFringeQuality=0
r.Tonemapper.Quality=1
r.Mobile.GTAO.Quality=2
r.ShadowQuality=3
r.Shadow.DistanceScale=2
r.Shadow.RadiusThreshold=0.03
r.Shadow.MaxCSMResolution=1024
r.Shadow.MinResolution=1024
r.Shadow.PerObjectShadowMapResolution=1024
r.Shadow.PerObjectResolutionMax=1024
r.Shadow.PerObjectResolutionMin=1024
r.ViewDistanceScale=2
foliage.LODDistanceScale=2
r.SSR.HalfResSceneColor=0
r.Mobile.WaterSSRResDiv=1.0
r.Mobile.WaterSSRStep=64
r.Mobile.EnableLandscapeSSR=1
r.Mobile.SSRLowPrecisionDepth=0
r.ReflectionCaptureResolution=128
r.TemporalAA.MobileUpsampling=1
r.TemporalAA.MobileStaticFrameWeight=0.25
r.TemporalAA.MobileFrameWeight=0.25
r.FidelityFX.FSR.SecondaryUpscale=1
r.FidelityFX.FSR.RCAS.Sharpness=0.6
r.MobileLightShaft.DownSampleFactor=1
r.Kuro.Foliage.MobileNearCullDistanceMax=6000
r.Kuro.Foliage.MobileMiddleCullDistanceMax=10000
r.Kuro.Foliage.MobileGrassCullDistanceMax=15000
r.Kuro.Foliage.MobileFarCullDistanceMax=20000
r.Kuro.Foliage.MobileImpostorFarCullDistanceMax=100000
wp.Runtime.KuroRuntimeStreamingRangeOverallScale=2.0

; MID
[/Script/Engine.RendererSettings]
r.Kuro.KuroBloomStreak=0
r.SceneColorFringeQuality=0
r.Tonemapper.Quality=1
r.Mobile.GTAO.Quality=1
r.Shadow.RadiusThreshold=0.03
r.Shadow.MaxCSMResolution=512
r.Shadow.MinResolution=512
r.Shadow.PerObjectShadowMapResolution=512
r.Shadow.PerObjectResolutionMax=512
r.Shadow.PerObjectResolutionMin=512
r.TemporalAA.MobileUpsampling=1
r.TemporalAA.MobileStaticFrameWeight=0.3
r.TemporalAA.MobileFrameWeight=0.3
r.FidelityFX.FSR.SecondaryUpscale=1
r.FidelityFX.FSR.RCAS.Sharpness=0.4
r.MobileLightShaft.DownSampleFactor=1
r.Kuro.Foliage.MobileNearCullDistanceMax=4000
r.Kuro.Foliage.MobileMiddleCullDistanceMax=7500
r.Kuro.Foliage.MobileGrassCullDistanceMax=15000
r.Kuro.Foliage.MobileFarCullDistanceMax=15000
r.Kuro.Foliage.MobileImpostorFarCullDistanceMax=50000

; Low
; Change foliage.DensityScale to 0.1 or higher if you want some grass back
[/Script/Engine.RendererSettings]
r.Kuro.KuroBloomStreak=0
r.SceneColorFringeQuality=0
r.Tonemapper.Quality=1
r.Mobile.GTAO.Quality=0
r.Shadow.RadiusThreshold=0.06
r.Shadow.MaxCSMResolution=256
r.Shadow.MinResolution=256
r.Shadow.PerObjectShadowMapResolution=256
r.Shadow.PerObjectResolutionMax=256
r.Shadow.PerObjectResolutionMin=256
r.Shadow.ForbidHISMShadowStartIndex=0
foliage.DensityScale=0
r.TemporalAA.MobileUpsampling=1
r.TemporalAA.MobileStaticFrameWeight=0.35
r.TemporalAA.MobileFrameWeight=0.35
r.ParticleLODBias=1
r.LandscapeLODBias=1
r.FidelityFX.FSR.SecondaryUpscale=1
r.FidelityFX.FSR.RCAS.Sharpness=0.2
r.MobileLightShaft.DownSampleFactor=1
r.Kuro.Foliage.MobileNearCullDistanceMax=2000
r.Kuro.Foliage.MobileMiddleCullDistanceMax=3750
r.Kuro.Foliage.MobileGrassCullDistanceMax=5000
r.Kuro.Foliage.MobileFarCullDistanceMax=7500
r.Kuro.Foliage.MobileImpostorFarCullDistanceMax=25000


; DeviceProfiles.ini
; editable with specify very_high, high, mid, low
[Android_VeryHigh DeviceProfile]
CVars=r.MobileContentScaleFactor=0.0
CVars=r.SecondaryScreenPercentage.GameViewport=100
CVars=r.imp.SSMbScaleLod0=0.0
CVars=r.imp.SSMbScaleLod1=0.0

[Android_High DeviceProfile]
CVars=r.MobileContentScaleFactor=1.5
CVars=r.SecondaryScreenPercentage.GameViewport=83
CVars=r.imp.SSMbScaleLod0=0.0
CVars=r.imp.SSMbScaleLod1=0.0

[Android_Mid DeviceProfile]
CVars=r.MobileContentScaleFactor=1.5
CVars=r.SecondaryScreenPercentage.GameViewport=77
CVars=r.imp.SSMbScaleLod0=2.0
CVars=r.imp.SSMbScaleLod1=2.0

[Android_Low DeviceProfile]
CVars=r.MobileContentScaleFactor=1.5
CVars=r.SecondaryScreenPercentage.GameViewport=67
CVars=r.imp.SSMbScaleLod0=3.0
CVars=r.imp.SSMbScaleLod1=3.0

; common
[Android_Default DeviceProfile]
BaseProfileName=Android_VeryHigh

[Nubia_Z17S DeviceProfile]
BaseProfileName=Android_VeryHigh

[Honor_BMH_AN10 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Vivo_V2231A DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno4xx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno5xx_Low DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno5xx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno6xx_Lowest DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno6xx_Low DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno6xx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno6xx_High DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno740 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno750 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno7xx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno7xx_Low DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno810 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno830 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Adreno8xx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Xclipse9xx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Xclipse5xx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_PowerVR_G6xxx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_PowerVR_GT7xxx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_PowerVR_GE8xxx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_PowerVR_GM9xxx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_PowerVR_BXM8xxx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_T6xx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_T7xx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_T8xx DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G5x_Low DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G5x DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G71 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G72 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G76 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G77 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G78 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G710 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G68 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G61x DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G62x DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Maleoon DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G715 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G720 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_Mali_G925 DeviceProfile]
BaseProfileName=Android_VeryHigh

[Android_TegraK1 DeviceProfile]
BaseProfileName=Android_VeryHigh

Format the .ini configuration clearly with section headers and comments. Prioritize compatibility, stability, and responsiveness for mobile gameplay.`;