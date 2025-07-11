$version = $args[0]

if(!$version) {
    "Version not specified"
    exit 1
}

$release_folder = "./release"

if (-not (Test-Path -Path $release_folder -PathType Container)) {
    New-Item -Path $release_folder -ItemType Directory
}

$compress_chrome_manifest2 = @{
    Path = "chrome-manifest2/*"
    CompressionLevel = "Fastest"
    DestinationPath = "$release_folder/ProxyAuthExtension-chrome-manifest2-v$version.zip"
}
Compress-Archive @compress_chrome_manifest2

$compress_chrome_manifest3 = @{
    Path = "chrome-manifest3/*"
    CompressionLevel = "Fastest"
    DestinationPath = "$release_folder/ProxyAuthExtension-chrome-manifest3-v$version.zip"
}
Compress-Archive @compress_chrome_manifest3

$compress_firefox_manifest2 = @{
    Path = "firefox-manifest2/*"
    CompressionLevel = "Fastest"
    DestinationPath = "$release_folder/ProxyAuthExtension-firefox-manifest2-v$version.zip"
}
Compress-Archive @compress_firefox_manifest2

$compress_firefox_manifest3 = @{
    Path = "firefox-manifest3/*"
    CompressionLevel = "Fastest"
    DestinationPath = "$release_folder/ProxyAuthExtension-firefox-manifest3-v$version.zip"
}
Compress-Archive @compress_firefox_manifest3

