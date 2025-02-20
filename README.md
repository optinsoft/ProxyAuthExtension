# Proxy Authentication Helper

## Description

Automatically enters proxy password when authentication is required.

## Usage in Python with Selenium

### Imports

```python
from selenium import webdriver
from pathlib import Path
```

### Chrome

1. Create a Chrome webdriver instance with the Proxy Authentication Helper extension.

```python
browserOptions = webdriver.ChromeOptions()
authPluginFile = Path('./ProxyAuthExtension-chrome-v1.0.zip').absolute().as_posix()
browserOptions.add_extension(authPluginFile)
browser = webdriver.Chrome(service=ChromeService(), options=browserOptions)
```

2. Load local blank html file (`blank.htm`).

```python
blankPath = Path("./blank.htm").absolute().as_posix()
browser.get(f"file:///{blankPath}")
```

3. Send authentication credentials to the Proxy Authentication Helper extension.

```python
browser.execute_script("""
window.postMessage({type:"auth_credentials",authCredentials:{username:"%s",password:"%s"}});
""" % ("YOUR_USERNAME", "YOUR_PASSWORD"))
```

### Firefox

1. Create a new instance of Firefox webdriver and install the Proxy Authentication Helper extension.

```python
browserOptions = webdriver.FirefoxOptions()
browser = webdriver.Firefox(service=FirefoxService(), options=browserOptions)
authPluginFile = Path('./ProxyAuthExtension-firefox-v1.0.zip').absolute().as_posix()
browser.install_addon(authPluginFile, True)
```

2. Send authentication credentials to the Proxy Authentication Helper extension.

```python
browser.execute_script("""
window.postMessage({type:"auth_credentials",authCredentials:{username:"%s",password:"%s"}});
""" % ("YOUR_USERNAME", "YOUR_PASSWORD"))
```
